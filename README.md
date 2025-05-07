# 🎵 Spotify Consumer

## 📚 Subject
**Electiva 1**

## 👥 Team Members
- Camila Acevedo Restrepo
- James Hincapie Mejia

---

## 🚀 Project Description

**Spotify Consumer** is a modern, responsive web application inspired by Spotify, designed to let users view and manage playlists, visualize profile statistics, and enjoy a beautiful, dark/light themed interface. Built with React and Tailwind CSS, it offers a seamless user experience, including authentication, profile editing, and playlist exploration.

---

## 🛠️ Technologies Used

- ⚛️ **React** (v19)
- 🎨 **Tailwind CSS**
- 💅 **PostCSS**
- ⚡ **Vite** (for blazing-fast development)
- 🎬 **Framer Motion** (animations)
- 🛡️ **ESLint** (code quality)
- 🖼️ **Bootstrap Icons**

---

## 📋 Requirements

- Node.js (v18 or higher recommended)
- npm (v9 or higher)

---

## 🏗️ Project Structure

```
src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── assets/
    │   ├── images/
    │   └── icons/
    ├── auth/
    │   ├── Login.jsx
    │   └── Register.jsx
    ├── context/
    │   ├── AuthContext.jsx
    │   └── ThemeContext.jsx
    ├── hooks/
    │   ├── useAuth.js
    │   └── useTheme.js
    ├── mock/
    │   ├── userMockData.json
    │   └── playlistMockData.json
    ├── routes/
    │   ├── Home.jsx
    │   ├── Profile.jsx
    │   └── Playlist.jsx
    ├── spotifyConsumer/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   └── PlaylistCard.jsx
    │   ├── pages/
    │   │   ├── Dashboard.jsx
    │   │   └── Settings.jsx
    └── utility/
            ├── api.js
            └── helpers.js
public/
    ├── favicon.ico
    └── j.png
```

---

## 💡 Features

- 🔐 **Authentication:** Login and registration modals with social login buttons.
- 👤 **Profile:** Editable user profile with statistics (favorite artists, genres, recent playback).
- 🎵 **Playlists:** Browse, search, and view details of playlists.
- 🌗 **Theme Switcher:** Toggle between dark and light modes.
- 📱 **Responsive Design:** Fully optimized for desktop and mobile.
- ⚡ **Fast Development:** Powered by Vite for instant reloads.

---

## 🖥️ Installation & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JJAMES2323/landing-page.git
   cd landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 📦 Mock Data

- User profile and playlists are loaded from local mock files for demonstration purposes.
- No real Spotify API integration (can be extended in the future).

---

## 📑 License

This project is licensed under the MIT License.  
Feel free to use, modify, and share!

---

## 🤝 Acknowledgements

Thanks to all open-source libraries and the Spotify design inspiration!

---

Enjoy exploring **Spotify Consumer**! 🎶✨