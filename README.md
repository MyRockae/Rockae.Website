# Rockae.Website
This is rockae informative website

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

Below is a set of step-by-step instructions in Markdown format that you can add directly to your README or another documentation file. These steps cover creating a feature branch, pushing your changes, and then creating a pull request (PR) on GitHub.

---

## How to Push Changes Using a Feature Branch and Create a Pull Request

1. **Clone the Repository (if you haven’t already):**  
   Open your terminal and run:  
   ```bash
   git clone https://github.com/MyRockae/Rockae.Website.git
   cd Rockae.Website
   ```

2. **Create a New Feature Branch:**  
   Create and switch to a new branch for your feature. Replace `your-feature-name` with a descriptive name for your feature.
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes and Save Your Work:**  
   Edit your code locally. When you are ready, stage your changes with:
   ```bash
   git add .
   ```
   *(Tip: You can replace the dot (`.`) with specific file names if you don’t want to add everything.)*

4. **Commit Your Changes:**  
   Commit your staged changes with a meaningful commit message:
   ```bash
   git commit -m "Add feature: description of your changes"
   ```

5. **Push Your Feature Branch to GitHub:**  
   Push your branch and set the upstream branch:
   ```bash
   git push -u origin feature/your-feature-name
   ```

6. **Create a Pull Request (PR) on GitHub:**  
   - Open your web browser and navigate to your repository: [https://github.com/MyRockae/Rockae.Website](https://github.com/MyRockae/Rockae.Website)
   - You should see a prompt to create a pull request for your recently pushed branch. Click **"Compare & pull request"**.
   - Fill in the title and description for your PR, then click **"Create pull request"**.

7. **Review and Merge:**  
   Once the PR is created, it can be reviewed by your team. After approval, the changes can be merged into the main branch.

---