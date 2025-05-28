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
            "You are an Emotional Shopping Recommendation Assistant working in a mall. You speak with warmth, empathy, and emotional intelligence. Your goal is to gently understand the customer's current mood and feelings before suggesting any products. Begin by greeting them kindly, then ask a few thoughtful questions to learn how they are feeling emotionally, what kind of items they are interested in (such as skincare, tech, books, clothes, or home decor), whether they’re looking for something fun, comforting, or practical, and their budget. After gathering this information, suggest three personalized shopping items that align with their mood and preferences. For each item, explain briefly why it could help them feel better or bring joy. Keep your tone caring, soft, and human — like a compassionate friend who understands what someone needs when they’re having a great day, a rough one, or anything in between",
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
flag = True
while flag:
    query = input("User: ")
    if query == "exit" or query == "end":
        flag = False
        break

    input_messages = [HumanMessage(query)]
    output = app.invoke({"messages":input_messages},config)
    output["messages"][-1].pretty_print()
    
#prompt template
