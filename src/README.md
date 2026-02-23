# Mahendiran's Portfolio

Personal portfolio showcasing my journey from engineering to UX design.

## About

MSc Interaction & Experience Design student at University of Limerick. 
Former Technical Solutions Engineer at Uniphore with passion for creating meaningful experiences.

## Tech Stack

- React + TypeScript
- Redux Toolkit (state management)
- React Router (navigation)
- Tailwind CSS (styling)
- Lucide Icons

## Redux Implementation

### Store Structure (`/store`)

**themeSlice.ts** - Dark/light theme management
- State: `isDark` (boolean)
- Action: `toggleTheme()`
- Used in: ThemeSwitcher component

**favoritesSlice.ts** - Project likes/favorites
- State: `likedProjects` (array of project IDs)
- Action: `toggleLike(projectId)`
- Used in: ProjectsPage to track liked projects

**store.ts** - Redux store configuration
- Combines theme and favorites reducers
- Exports typed store for TypeScript

**hooks.ts** - Custom typed hooks
- `useAppDispatch()` - Typed dispatch
- `useAppSelector()` - Typed selector

### How Redux is Used

**Theme Toggle:**
```typescript
const isDark = useAppSelector((state) => state.theme.isDark);
dispatch(toggleTheme());
```

**Project Likes:**
```typescript
const likedProjects = useAppSelector((state) => state.favorites.likedProjects);
dispatch(toggleLike(projectId));
```

## Features

- 🎨 Creative, modern design
- 🌙 Dark mode (Redux managed)
- 💖 Interactive project likes (Redux managed)  
- 📱 Fully responsive
- ✨ Smooth animations
- 🎯 5 pages: Home, About, Skills, Projects, Contact

## Design Philosophy

- Clean and minimal
- Creative but professional
- Focus on usability
- Show personality

---

**Contact:** sindhumd215@gmail.com  
**LinkedIn:** linkedin.com/in/sindhu21  
**Location:** Limerick, Ireland 🇮🇪
