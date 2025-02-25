# Use official Python image
FROM python:3.13.2

# Set working directory
WORKDIR /app

# Copy files
COPY requirements.txt requirements.txt
COPY app.py app.py

# Install dependencies
RUN pip install -r requirements.txt

# Expose the port Flask runs on
EXPOSE 8000

# Run the Flask app
CMD ["python", "app.py"]
