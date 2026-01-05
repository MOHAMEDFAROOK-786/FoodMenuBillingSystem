# Food Menu Billing System

A simple and responsive web application for managing a food menu and generating bills for customers. Built with HTML, CSS, and JavaScript.

## Features

- **Add New Items**: Easily add food items with names and prices
- **View Menu**: Display all available food items in an organized list
- **Edit/Delete Items**: Modify or remove items from the menu
- **Generate Bills**: Select items and specify quantities to calculate total bills
- **Bill Download**: Download bills as text files with date/time stamps
- **Responsive Design**: Works on both desktop and mobile devices
- **Local Storage**: Menu items are saved in browser's local storage

## File Structure

```
project/
├── index.html          # Main HTML file
├── style.css          # CSS styles
└── script.js          # JavaScript functionality
```

## How to Use

### 1. Adding Menu Items
1. Enter food name in the "Food Name" field
2. Enter price in the "Food Rate" field
3. Click "Add Item" to save to menu

### 2. Viewing and Managing Menu
- All added items appear in the menu section
- Click "Edit" to modify item details
- Click "Delete" to remove items from menu

### 3. Creating a Bill
1. Click on any item in the menu to add it to the bill
2. Adjust quantity using the number input
3. Click "Total" to calculate the bill amount
4. Click "Download Bill" to save as a text file

### 4. Editing Bill Items
- Use the "remove" button to delete items from the bill
- Change quantities directly in the quantity input fields

## Technologies Used

- **HTML5**: Page structure and semantic markup
- **CSS3**: Styling with Flexbox for responsive layouts
- **JavaScript**: Core functionality and interactivity
- **Local Storage**: Persistent data storage
- **Media Queries**: Mobile-responsive design

## Browser Compatibility

Works on all modern browsers including:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Setup Instructions

1. Download or clone the project files
2. Ensure all three files are in the same directory:
   - `index.html`
   - `style.css`
   - `script.js`
3. Open `index.html` in any modern web browser
4. No additional installation or dependencies required

## Features in Detail

### Responsive Design
- Adapts layout for mobile screens (≤768px)
- Adjusts button sizes and spacing for touch devices
- Maintains readability on all screen sizes

### Data Persistence
- Menu items automatically save to browser's local storage
- Data persists between browser sessions
- No database or server required

### Bill Generation
- Automatic date and time stamping
- Calculates subtotals and totals
- Generates downloadable text files
- Includes restaurant branding

## Customization

### Styling
Modify `style.css` to:
- Change colors in the color variables
- Adjust font sizes and families
- Modify button styles and spacing

### Functionality
Modify `script.js` to:
- Change currency symbol
- Add tax calculations
- Modify bill format
- Add discount functionality

## Troubleshooting

1. **Items not saving**: Clear browser cache and ensure JavaScript is enabled
2. **Layout issues**: Refresh page or check console for errors
3. **Download not working**: Check browser permissions for downloads
4. **Mobile display issues**: Ensure viewport meta tag is present

## Future Enhancements

Potential features to add:
- Category organization for menu items
- Search/filter functionality
- Print bill option
- Multiple currency support
- Customer details capture
- Tax and discount calculations
- Order history tracking

## License

Free to use for personal and educational purposes.

## Visit Site

https://mohamedfarook-786.github.io/FoodMenuBillingSystem/

---

**Note**: This is a client-side application. All data is stored locally in the browser and will be cleared if browser cache/local storage is cleared.
