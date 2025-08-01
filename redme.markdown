# Potatoes_DIS_CLA: Potato Disease Classification 🌱🤖

![Python](https://img.shields.io/badge/Python-3.8+-blue?logo=python) ![TensorFlow](https://img.shields.io/badge/TensorFlow-2.0-orange?logo=tensorflow) ![React](https://img.shields.io/badge/React-18.3-blue?logo=react) ![FastAPI](https://img.shields.io/badge/FastAPI-0.95-green?logo=fastapi) ![GCP](https://img.shields.io/badge/GCP-CloudFunctions-blue?logo=google-cloud)

Potatoes_DIS_CLA is a machine learning project for classifying potato diseases using a **Convolutional Neural Network (CNN)** trained on 5,000+ images, achieving **96% validation accuracy**. It features a **FastAPI** backend, **ReactJS** web frontend, and **React Native** mobile app, with deployment on **Google Cloud Platform (GCP)** for scalable inference.

## ✨ Features

- 🌱 **CNN Model**: Trained on 5,000+ potato images with data augmentation, achieving 96% validation accuracy using dropout and early stopping.
- ⚙️ **FastAPI Backend**: Serves predictions via REST API, with optional TensorFlow Serving for high-performance inference.
- 📱 **Cross-Platform UI**: Responsive ReactJS web app and React Native mobile app for seamless disease classification.
- ☁️ **Cloud Deployment**: Deploys CNN and TF Lite models on GCP Cloud Functions for efficient, scalable predictions.
- 💾 **Data Management**: Processes Kaggle’s PlantVillage dataset, focusing on potato-specific disease classes.

## 🛠️ Tech Stack

| Category         | Technologies                                    |
|------------------|-------------------------------------------------|
| **ML Framework** | Python, TensorFlow, Jupyter Notebook 📚        |
| **Backend**      | FastAPI, TensorFlow Serving ⚙️                 |
| **Frontend**     | ReactJS, React Native 🌟                      |
| **Database**     | None (file-based model storage) 🗄️            |
| **Deployment**   | Google Cloud Platform (Cloud Functions) ☁️    |
| **Tools**        | Git, GitHub, Postman, Docker 🧰               |

## ✅ Prerequisites

| Requirement                | Version/Info                     |
|----------------------------|----------------------------------|
| 💻 Python                 | 3.8 or higher                   |
| 🐙 Git                    | Installed for version control   |
| 💻 Node.js                | v16 or higher                   |
| 📱 React Native CLI       | For mobile app setup            |
| ☁️ GCP Account            | With project ID and bucket       |
| 🐳 Docker                 | For TensorFlow Serving (optional) |

## 🏁 Getting Started

### 1. Python Setup 🐍

1. Install **Python** (3.8+): Follow [setup instructions](https://wiki.python.org/moin/BeginnersGuide).
2. Install dependencies for training and API:
   ```bash
   pip3 install -r training/requirements.txt
   pip3 install -r api/requirements.txt
   ```
3. Install **TensorFlow Serving** (optional for API): Follow [setup instructions](https://www.tensorflow.org/tfx/serving/setup).

### 2. ReactJS Frontend Setup 🌐

1. Install **Node.js**: Follow [setup instructions](https://nodejs.org/en/download/package-manager/).
2. Install **NPM**: Follow [setup instructions](https://www.npmjs.com/get-npm).
3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install --from-lock-json
   npm audit fix
   ```
4. Copy `.env.example` to `.env` and update `REACT_APP_API_URL` with the API URL (e.g., `http://0.0.0.0:8000`).

### 3. React Native Mobile App Setup 📱

1. Set up **React Native CLI**: Follow [React Native environment setup](https://reactnative.dev/docs/environment-setup), selecting the `React Native CLI Quickstart` tab.
2. Install dependencies:
   ```bash
   cd mobile-app
   yarn install
   ```
3. For macOS users (iOS setup):
   ```bash
   cd ios && pod install && cd ..
   ```
4. Copy `.env.example` to `.env` and update `URL` with the API URL.

## 🧠 Training the Model

1. Download the **PlantVillage dataset** from [Kaggle](https://www.kaggle.com/arjuntejaswi/plant-village).
2. Keep only potato-related folders.
3. Launch Jupyter Notebook:
   ```bash
   jupyter notebook
   ```
4. Open `training/potato-disease-training.ipynb`.
5. Update the dataset path in cell #2.
6. Run all cells sequentially.
7. Save the generated model with a version number in the `models` folder.

## 🚀 Running the API

### Option 1: FastAPI Only
1. Navigate to the API directory:
   ```bash
   cd api
   ```
2. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0
   ```
3. Access the API at `http://0.0.0.0:8000`.

### Option 2: FastAPI with TensorFlow Serving
1. Navigate to the API directory:
   ```bash
   cd api
   ```
2. Copy `models.config.example` to `models.config` and update paths.
3. Run TensorFlow Serving (update config path):
   ```bash
   docker run -t --rm -p 8501:8501 -v /path/to/potato-disease-classification:/potato-disease-classification tensorflow/serving --rest_api_port=8501 --model_config_file=/potato-disease-classification/models.config
   ```
4. Run the FastAPI server:
   ```bash
   uvicorn main-tf-serving:app --reload --host 0.0.0.0
   ```
5. Access the API at `http://0.0.0.0:8000`.

## 🌐 Running the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Copy `.env.example` to `.env` and update `REACT_APP_API_URL` if needed.
3. Start the frontend:
   ```bash
   npm run start
   ```

## 📱 Running the Mobile App

1. Navigate to the mobile app directory:
   ```bash
   cd mobile-app
   ```
2. Copy `.env.example` to `.env` and update `URL` if needed.
3. Run the app:
   ```bash
   npm run android
   # or
   npm run ios
   ```
4. Generate a signed APK: Follow [React Native instructions](https://reactnative.dev/docs/signed-apk-android).

## 📦 Creating the TF Lite Model

1. Launch Jupyter Notebook:
   ```bash
   jupyter notebook
   ```
2. Open `training/tf-lite-converter.ipynb`.
3. Update the dataset path in cell #2.
4. Run all cells sequentially.
5. Save the model in the `tf-lite-models` folder.

## ☁️ Deploying to GCP

### TF Lite Model Deployment
1. Create a [GCP account](https://console.cloud.google.com/freetrial/signup/tos).
2. Create a [GCP project](https://cloud.google.com/appengine/docs/standard/nodejs/building-app/creating-project) and note the project ID.
3. Create a [GCP bucket](https://console.cloud.google.com/storage/browser/).
4. Upload `potatoes.h5` to the bucket at `models/potatoes.h5`.
5. Install [Google Cloud SDK](https://cloud.google.com/sdk/docs/quickstarts).
6. Authenticate:
   ```bash
   gcloud auth login
   ```
7. Deploy the Cloud Function:
   ```bash
   cd gcp
   gcloud functions deploy predict_lite --runtime python38 --trigger-http --memory 512 --project your_project_id
   ```
8. Test with Postman using the [Trigger URL](https://cloud.google.com/functions/docs/calling/http).

### TF Model (.h5) Deployment
1. Follow steps 1–3 from TF Lite deployment.
2. Upload `potato-model.h5` to the bucket at `models/potato-model.h5`.
3. Authenticate with Google Cloud SDK:
   ```bash
   gcloud auth login
   ```
4. Deploy the Cloud Function:
   ```bash
   cd gcp
   gcloud functions deploy predict --runtime python38 --trigger-http --memory 512 --project your_project_id
   ```
5. Test with Postman using the [Trigger URL](https://cloud.google.com/functions/docs/calling/http).

## 📚 Learn More

Explore the tech stack:
- [TensorFlow Documentation](https://www.tensorflow.org/guide) 📖 – Deep learning and CNNs.
- [FastAPI Documentation](https://fastapi.tiangolo.com/) ⚙️ – API development.
- [ReactJS Documentation](https://react.dev/) 🌟 – Web frontend.
- [React Native Documentation](https://reactnative.dev/docs/getting-started) 📱 – Mobile app development.
- [GCP Cloud Functions](https://cloud.google.com/functions/docs) ☁️ – Serverless deployment.

<details>
<summary>🤝 Contributing</summary>

Contributions are welcome! 💡 Follow these steps:
1. Fork the repository 🍴.
2. Create a feature branch (`git checkout -b feature/YourFeature`) 🌿.
3. Commit your changes (`git commit -m "Add YourFeature"`) 📝.
4. Push to the branch (`git push origin feature/YourFeature`) 📤.
5. Open a pull request 🚀.
</details>

<details>
<summary>📜 License</summary>

This project is licensed under the MIT License.
</details>