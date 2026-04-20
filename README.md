# UML Flow

A modern, web-based UML diagramming tool inspired by the visual node-based interface of n8n. Built with React, React Flow, and Tailwind CSS.

## 🔗 Live Demo

[View Live Project](https://umldesign.vercel.app/)

## 🚀 Features

- **Infinite Canvas:** Drag and drop nodes onto a sleek, dark-mode workspace with a dot background.
- **Categorized Sidebar:** Access nodes grouped by diagram type (Class, Use Case, State, Activity, Sequence).
- **Custom UML Nodes:**
  - **Class Diagram:** Detailed Class nodes with headers, attributes, and methods.
  - **Use Case Diagram:** Actor and Use Case nodes.
  - **State Diagram:** State, Start, and End state nodes.
  - **Activity Diagram:** Action, Decision, and Fork/Join nodes.
  - **Sequence Diagram:** Lifeline nodes with multiple connection points along the line.
- **Interactive Editing:** Double-click any node label to edit it directly on the canvas.
- **Modern UI/UX:** Premium aesthetics with rounded corners, neon handles, and smooth transitions.

## 🛠 Tech Stack

- **Framework:** [React](https://reactjs.org/) (Vite)
- **Diagramming Engine:** [React Flow](https://reactflow.dev/) (@xyflow/react)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AryanTelis2003/umldesign.git
   cd umldesign
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```
Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`).

## 📖 How to Use

1. **Add Nodes:** Drag any node from the left sidebar onto the canvas.
2. **Connect Nodes:** Drag from a neon-colored handle (output) of one node to a handle (input) of another.
3. **Edit Labels:** Double-click on the text inside a node to rename it. Press `Enter` to save or `Esc` to cancel.
4. **Navigate:** Drag the canvas to move around; use the controls at the bottom-left to zoom and fit the view.
