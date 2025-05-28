#prompting the model

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

#prompt template
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder

prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are Sales Assistance in a shopping mall. You have access to all information regarding store. Speak in a manner so that the customer is satisfied",
        ),
        MessagesPlaceholder(variable_name="messages"),
    ]
)

#defining a function that calls the model
def call_model(state:MessagesState):
    chain = prompt | model
    response = chain.invoke(state["messages"])
    return {"messages":response}

#defining a single node in the graph
workflow.add_edge(START,"model")
workflow.add_node("model",call_model)

#Add memory
memory = MemorySaver()
app = workflow.compile(checkpointer=memory)

config = {'configurable':{'thread_id':'mirun8'}}

#implementing conversation
def conversation(query):
    input_messages = [HumanMessage(query)]
    output = app.invoke({"messages":input_messages},config)
    output["messages"][-1].pretty_print()
    print(output["messages"][-1])
    return output["messages"][-1].content
#prompt template
