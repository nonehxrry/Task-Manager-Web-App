// Assuming 'app' is your Express instance and 'cors' is installed/required
const cors = require('cors'); 

app.use(cors({
    origin: 'https://task-manager-web-app-eta.vercel.app', // <-- YOUR VERCEL FRONTEND URL
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true 
}));

// ... rest of your server setup, routes, and connect logic

app.listen(process.env.PORT || 1200, async() => {
    try {
        // You should use the deployed port in the console for accurate logs
        console.log("listening on port " + (process.env.PORT || 1200)); 
        return connect();
    } catch (error) {
        console.log(error);
    }
});
```
* **Commit this change:**
    ```powershell
    PS C:\Users\Harjit\Task-Manager-Web-App> git add .
    PS C:\Users\Harjit\Task-Manager-Web-App> git commit -m "Configured CORS for Vercel frontend"
    PS C:\Users\Harjit\Task-Manager-Web-App> git push
    ```

### Step 2: Deploy the Backend to Render (or similar)

1.  **Go to Render, Railway, or another Node hosting service.**
2.  Create a **New Web Service** project.
3.  Connect the service to your GitHub repository: `nonehxrry/Task-Manager-Web-App`.
4.  **Crucial Step:** Set the **Root Directory** for this service to:
    ```
    backend
    ```
5.  **Set Environment Variables:** Add your MongoDB connection string (and any other secret keys like `JWT_SECRET`) as **Environment Variables** in the hosting service's dashboard.
6.  **Deploy:** Once deployed, the service will provide you with a **Backend API Link** (e.g., `https://nonehxrry-task-api.onrender.com`).

### Step 3: Update Frontend API Calls

Now that you have the **Backend API Link**, you must update your Vercel frontend project to use it.

1.  **Open Frontend Action File:** Open `frontend/src/redux/action.js` (or similar).
2.  **Replace Old URL:** Update all API calls (`axios.post`, `axios.get`) to use the new deployed URL.

    *Example (`frontend/src/redux/action.js`):*

    ```javascript
    // Use your actual deployed backend URL here
    const API_BASE_URL = "YOUR_BACKEND_API_LINK"; 

    export const registerUser = (userData) => async (dispatch) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/register`, userData);
            // ... rest of logic
        } catch (error) {
            // ... rest of error handling
        }
    }
    ```

3.  **Commit and Push Final Changes:**
    ```powershell
    PS C:\Users\Harjit\Task-Manager-Web-App> git add .
    PS C:\Users\Harjit\Task-Manager-Web-App> git commit -m "Final link update to live backend"
    PS C:\Users\Harjit\Task-Manager-Web-App> git push
    
