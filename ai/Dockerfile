# Use Python 3.12 as the base
FROM python:3.12-slim

# Set a working directory in the container
WORKDIR /app

# Copy requirements before copying the rest of the files (for better caching)
# COPY requirements.txt /app
COPY requirements-lock.txt /app

# Install the dependencies
# RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --no-cache-dir -r requirements-lock.txt

# Copy the rest of the project files
COPY . /app

# Expose the port on which your Flask/FastAPI/etc. app runs (adjust if needed)
EXPOSE 5000

# Set the default command to run your main app script
CMD ["python", "app.py"]