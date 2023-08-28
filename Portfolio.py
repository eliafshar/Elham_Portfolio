import csv
import os

from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/project")
def project():
    return render_template("project.html")
def write_to_csv(data):
    # Provide the absolute path to the file
    absolute_file_path = os.path.join("C:\\Users\\Dear\\Desktop\\Portfolio\\.venv\\Lib\\site-packages", "database.csv")

    with open(absolute_file_path, mode="a", encoding='utf-8', newline='') as database2:
        name = data["name"]
        email = data["email"]
        message = data["message"]
        csv_writer = csv.writer(database2, delimiter=",", quotechar='"', quoting=csv.QUOTE_MINIMAL)
        csv_writer.writerow([name, email, message])



@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    if request.method == "POST":
     try:
        data = request.form.to_dict()
        write_to_csv(data)
        return render_template('thankyou.html', name=data['name'])
     except Exception as e:
        print("Error:", e)
        return "Did not save to database"
    else:
       return "Somthing went wrong!"

if __name__ == "__main__":
    app.run()
