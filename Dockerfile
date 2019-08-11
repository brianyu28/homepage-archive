FROM phusion/passenger-full:1.0.6

EXPOSE 3000

# Install pip
RUN apt-get update && \
    apt-get install -y python3-pip

# Copy application into /home/app
COPY . /home/app

# Build client
WORKDIR /home/app/client
RUN npm install && npm run build
RUN cp -r build/static/* /home/app/static/

# Install requirements
WORKDIR /home/app
RUN pip3 install -r requirements.txt

ENV PASSENGER_PYTHON python3
ENV PASSENGER_LOG_FILE /var/log/passenger.log
ENV PASSENGER_PID_FILE /var/log/passenger.pid
CMD ["sh", "-c", "if [ -n \"$PORT\" ]; then passenger start --port $PORT; else passenger start; fi"]
