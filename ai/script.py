import json
import csv
import os


try:
    input_file = input("Enter the path of the file you want to read from: ")
    if not os.path.exists(input_file):
        print("File does not exist")
        exit()

    output_file = input("Enter the path of the file you want to write to: ")
except:
    exit()

headers = []
try:
    with open(input_file, 'r') as f:
        data = json.load(f)
        for resource in data:
            headers.append(resource)
except:
    print("Invalid file name. Exiting...")
    exit()

with open(output_file, 'w', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=headers)
    writer.writeheader()
    for resource in data:
        writer.writerow(data[resource])
        print(f"Writing {data[resource]} to {output_file}")
