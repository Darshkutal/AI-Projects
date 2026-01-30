# Analytics Dashboard

A modern, dark-themed analytics dashboard built with HTML, CSS, and JavaScript.

## Features

- **Overview metrics** – Revenue, users, conversions, session stats with trend indicators
- **Revenue chart** – Line chart comparing revenue vs expenses over time
- **Traffic sources** – Doughnut chart showing traffic breakdown
- **Activity table** – Recent user activity with status badges
- **Responsive design** – Works on desktop, tablet, and mobile
- **Dark theme** – Easy on the eyes with teal accents

## Running the Dashboard

1. **Simple HTTP server** (Python 3):
   ```bash
   cd dashboard
   python3 -m http.server 8080
   ```
   Then open http://localhost:8080

2. **Or open directly** – Double-click `index.html` (charts may need a server for CORS with Chart.js CDN)

3. **VS Code Live Server** – Right-click `index.html` → "Open with Live Server"

## Structure

```
dashboard/
├── index.html   # Main HTML structure
├── styles.css   # All styling
├── app.js       # Charts and interactivity
└── README.md
```

## Tech Stack

- Vanilla HTML/CSS/JavaScript
- [Chart.js](https://www.chartjs.org/) for visualizations
- Google Fonts (DM Sans, JetBrains Mono)
