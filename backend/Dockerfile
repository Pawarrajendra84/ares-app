# Use Python
FROM python:3.8-slim-buster

# Set working directory
WORKDIR /app

# Copy requirements first (better caching)
COPY requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# Copy rest of backend code
COPY . .

# Expose backend port
EXPOSE 8000

# Run the app
CMD ["python", "app.py"]