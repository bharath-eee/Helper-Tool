from fastapi import FastAPI

app = FastAPI(title="Helper Tool API")

@app.get("/")
def home():
    return {
        "message": "Helper Tool Backend is running!"
    }

@app.get("/health")
def health():
    return {"status": "healthy"}