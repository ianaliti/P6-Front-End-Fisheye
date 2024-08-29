FishEye Project

FishEye is a platform designed to allow freelance photographers to showcase their best work. This project involves creating a dynamic, accessible prototype of the FishEye website, where photographers can present their portfolios, including both photos and videos. The project focuses on delivering a high level of accessibility while maintaining a modern and dynamic user interface.

Features:
Homepage
  - Photographer List: Displays a list of photographers with their name, location, price per day, and a profile picture.
  - Dynamic Data Loading: Photographer data is dynamically loaded from a JSON file.
  - Navigation: Clicking on a photographer's profile leads to their individual portfolio page.
Photographer's Page
  - Portfolio Gallery: Displays a gallery of the photographer's media (both images and videos).
  - Media Sorting: Users can sort media by popularity, date, or title using a dropdown menu.
  - Lightbox Feature: Allows users to view media in detail, with support for keyboard navigation (arrow keys and escape key).
  - Total Likes: Displays the total number of likes accumulated by the photographer's media.
  - Contact Form: A modal contact form allows users to reach out to photographers.
  
Accessibility:
  - Keyboard Navigation: The site is fully navigable using a keyboard, with focus states and tabindex set appropriately.
  - ARIA Attributes: ARIA labels and roles are used to enhance screen reader compatibility.
  - Semantic HTML: Semantic HTML elements are used to improve the accessibility and readability of the code.
  
Project Structure:

<img width="200" alt="Screenshot 2024-08-29 at 17 37 48" src="https://github.com/user-attachments/assets/97fce4f3-8e0a-4a0d-b86c-a8d65d8351c4">


Key Files and Directories:
  - index.html & photographer.html: The main HTML files for the homepage and photographer's page.
  - css/style.css: Contains all the styles for the project.
  - data/photographers.json: Stores the mock data for photographers and their media.
  - scripts/factories/: Factory classes used for creating different components dynamically.
  - scripts/templates/: Contains the JavaScript classes representing the UI components (e.g., PhotographerCard, ImageMedia).
  - scripts/utils/: Utility functions for data fetching, dropdown management, lightbox functionality, and likes management.
  - scripts/pages/: Page-specific scripts to initialize and render content dynamically.

Usage:
  1) Homepage: Browse through the list of photographers. Click on a photographer to view their portfolio.
  2) Photographer's Page: View the media gallery, sort the media, and interact with the lightbox to view media in detail. You can also send a message to the photographer using the contact form.
  3) Accessibility: Navigate the entire site using the keyboard to ensure all features are accessible to users with disabilities.

Technical Details:
1) Factory Method Pattern: Used to create different types of media components (images and videos) dynamically, ensuring that the code is extendable and maintainable.
2) Dropdown Management: The dropdown menu for sorting media is fully accessible, supporting keyboard navigation and ARIA attributes to describe its behavior.
3) Total Likes Management: The total number of likes is calculated dynamically and updated in real-time as users interact with the media.

