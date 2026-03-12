# from pydantic import BaseModel

# class Data(BaseModel):
#     text: str

from pydantic import BaseModel


class Data(BaseModel):
    text: str
    style: str = "professional"
    context: str = "social_media"