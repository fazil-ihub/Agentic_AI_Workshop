from fastapi import FastAPI
from app.api import router

app = FastAPI(title="Pitch Analysis API")
app.include_router(router)
