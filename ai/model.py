from pydantic import BaseModel


class InformationModel(BaseModel):
    """Information model"""
    title: str
    description: str
    type: str
    metadata: dict
