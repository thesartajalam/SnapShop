
# 🛍️ SnapShop - Location-Based Shop Access App

SnapShop is a **React Native (Expo)** app that utilizes **mock login** and **real-time location detection** to allow users to access specific shops within a **300-meter proximity**. Whether you're testing geofencing, location-triggered access, or simply building a smart local discovery app — SnapShop offers a clean and modern foundation to work from.

---

## 🚀 Key Features

👉 **Mock Authentication** – Simple login screen to simulate user authentication.  
👉 **Location Permission Handling** – Requests and handles foreground location permissions with user alerts.  
👉 **Shop Detection Based on Proximity** – Detects if a user is within 300 meters of any predefined shops.  
👉 **Dynamic Navigation** – Automatically navigates users to **Shop Screen** if near a shop, else takes them to **Home Screen**.  
👉 **Reusable UI Components** – Custom-built buttons, loading overlays, logout, and headers.  
👉 **Structured Codebase** – Separation of screens, UI components, utility functions, and constants for clean maintainability.

---

## 🛠 Tech Stack

- **React Native (Expo)** – Framework for cross-platform mobile development.
- **Expo Location API** – To get user's current geolocation.
- **AsyncStorage** – For temporary token storage simulating login state.
- **React Native Navigation** – Navigation stack using Native Stack.
- **Custom Hooks & Utility Functions** – For cleaner logic separation.

---

## 📚 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/thesartajalam/SnapShop.git
cd SnapShop
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Start the App

```sh
npx expo start
```

🔹 Press `a` for Android emulator or in Real Device
🔹 Press `i` for IOS emulator or in Real Device

---

## 📸 Screenshots (Coming Soon)

**Login Screen**
![LoginScreen](https://github.com/user-attachments/assets/4991d3a1-51e1-4da8-a7ef-85e05c89c824)

**Loading Overlay During Navigation Check**
![LoadingOverlay](https://github.com/user-attachments/assets/1de7f338-f002-4322-9cfe-e2b0e7ad1047)

**Request for Location Permission**
![LocationPermission](https://github.com/user-attachments/assets/1f3dde64-8652-43d8-a107-ed57170174dd)

**Shop Screen (When nearby a shop)**
![ShopScreen](https://github.com/user-attachments/assets/cafcc980-bb4a-4e23-abe8-59163e3137f3)

**Home Screen (When outside the shop radius)**
![HomeScreen](https://github.com/user-attachments/assets/278f9fed-d1af-4d78-916f-966784e5d426)

---

## 📁 Project Structure

```
/SnapShop
├── assets/                     # Emoji assets used in screens
├── components/
│   ├── Auth/                   # AuthForm & Input field components
│   └── UI/                     # Button, Header, Loading, Logout, ShopCard etc.
├── constants/                  # Centralized style/color config
├── data/                       # Hardcoded list of shops with coordinates
├── screens/                    # LoginScreen, HomeScreen, ShopScreen
├── util/                       # LocationManager and Axios (http) utilities
├── App.js                      # Entry point of the app
├── package.json
└── README.md                   # This file
```

---

## 🔐 Authentication Details (Mock)

* No actual backend authentication
* The token is saved in **AsyncStorage**
* Logging out clears the storage and navigates to `LoginScreen`

---

## 💡 How Proximity Works

* User's current location is compared to predefined shop coordinates using the **Haversine formula**.
* If distance ≤ 300 meters ➡️ navigates to `ShopScreen`.
* Else ➡️ shows `HomeScreen`.

---

## 🛡 License

This project is intended for learning and showcasing geolocation-based app functionality using **React Native + Expo**.

---


## Note 

username -> admin
password -> 1234

You can also use the GEOAPIFY PLACES API data for navigation to ShopScreen based on real world data means,
if a shop is really in 300 meters of radius of the user's actual location then the user will navigate to
the "ShopScreen" otherwise to the "HomeScreen".

So, Look the LoginScreen.js file properly in the loginHandler() function 
there is commented code which is using actual real world data fetched from GEOAPIFY PLACES API using axios.
So uncomment that part and comment the above code which is using hardcoded WITH_IN_300 and OUTSIDE_300

---

## 📩 Contact

📧 **Email**: [sartajalam565@gmail.com](mailto:sartajalam565@gmail.com)
📎 **GitHub:** [@thesartajalam](https://github.com/thesartajalam)

---

## ✨ Final Thoughts

SnapShop is built to simulate a **real-world location-aware app**. It's simple, lightweight, and modular — ideal for learning or for building something even bigger on top of it!

---



