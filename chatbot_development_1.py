import getpass , os
from dotenv import load_dotenv

#load env file 
load_dotenv()

#importing nvidia llm model
from langchain_google_genai import ChatGoogleGenerativeAI
model = ChatGoogleGenerativeAI(model="gemini-1.5-flash")

#using the model directly 
from langchain_core.messages import HumanMessage,AIMessage
get = model.invoke(
    [
        HumanMessage(content="Hi, I am Mirun!!!"),
        AIMessage(content="Hello Mirun! It's nice to meet you. What can I do for you today?"),
        HumanMessage(content="What is my name?")
        
    ]
)
print(get)
