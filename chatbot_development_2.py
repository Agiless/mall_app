#including access to history

import getpass , os
from dotenv import load_dotenv

#load env file 
load_dotenv()

#importing nvidia llm model
from langchain_google_genai import ChatGoogleGenerativeAI
model = ChatGoogleGenerativeAI(model="gemini-1.5-flash")

#using the model directly 
from langchain_core.messages import HumanMessage,AIMessage

#pre-requisities to unlock access to chathistory
from langgraph.checkpoint.memory import MemorySaver
from langgraph.graph import START,MessagesState,StateGraph

#Define a new graph
workflow = StateGraph(state_schema=MessagesState)

#defining a function that calls the model
def call_model(state:MessagesState):
    response = model.invoke(state["messages"])
    return {"messages":response}

#defining a single node in the graph
workflow.add_edge(START,"model")
workflow.add_node("model",call_model)

#Add memory
memory = MemorySaver()
app = workflow.compile(checkpointer=memory)

config = {'configurable':{'thread_id':'mirun8'}}

#implementing conversation
flag = True
while flag:
    query = input("User: ")
    if query == "exit" or query == "end":
        flag = False
        break

    input_messages = [HumanMessage(query)]
    output = app.invoke({"messages":input_messages},config)
    output["messages"][-1].pretty_print()