# streamlit_chatbot.py

import os
import streamlit as st
from dotenv import load_dotenv

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage
from langgraph.checkpoint.memory import MemorySaver
from langgraph.graph import START, MessagesState, StateGraph
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder

# Load environment variables
load_dotenv()

# Initialize model
model = ChatGoogleGenerativeAI(model="gemini-1.5-flash")

# Create prompt template
prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are an Emotional Shopping Recommendation Assistant working in a mall. You speak with warmth, empathy, and emotional intelligence. Your goal is to gently understand the customer's current mood and feelings before suggesting any products. Begin by greeting them kindly, then ask a few thoughtful questions to learn how they are feeling emotionally, what kind of items they are interested in (such as skincare, tech, books, clothes, or home decor), whether they’re looking for something fun, comforting, or practical, and their budget. After gathering this information, suggest three personalized shopping items that align with their mood and preferences. For each item, explain briefly why it could help them feel better or bring joy. Keep your tone caring, soft, and human — like a compassionate friend who understands what someone needs when they’re having a great day, a rough one, or anything in between",
        ),
        MessagesPlaceholder(variable_name="messages"),
    ]
)

# Define model call function
def call_model(state: MessagesState):
    chain = prompt | model
    response = chain.invoke(state["messages"])
    return {"messages": response}

# Setup LangGraph
workflow = StateGraph(state_schema=MessagesState)
workflow.add_node("model", call_model)
workflow.add_edge(START, "model")
memory = MemorySaver()
app = workflow.compile(checkpointer=memory)
config = {'configurable': {'thread_id': 'mirun8'}}

# --- Streamlit UI ---

st.set_page_config(page_title="Emotional Shopping Assistant", page_icon="🛍️")
st.title("🛍️ Emotional Shopping Assistant")
st.markdown("Talk to your compassionate shopping assistant 👗📚🧴")

# Initialize chat history
if "chat_history" not in st.session_state:
    st.session_state.chat_history = []

# Chat input box
user_input = st.chat_input("Say something...")

if user_input:
    # Store human message
    st.session_state.chat_history.append(HumanMessage(user_input))
    # Invoke model
    result = app.invoke({"messages": st.session_state.chat_history}, config)
    response = result["messages"][-1].content
    st.session_state.chat_history.append(result["messages"][-1])

# Display chat history
for msg in st.session_state.chat_history:
    if isinstance(msg, HumanMessage):
        with st.chat_message("user"):
            st.write(msg.content)
    else:
        with st.chat_message("assistant"):
            st.write(msg.content)
