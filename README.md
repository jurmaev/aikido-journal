# aikido-journal  
Practice project made in order to help aikido trainers maintain their groups, students, parents and their attendance    
## Installation
```
git clone https://github.com/jurmaev/aikido-journal.git
npm install
npm run dev
```
## Description  
1. Main page  
   You can login or register on main page
2. Login page  
   This page contains form with phone number input and password input and login button.
3. Register page  
   This page contains:  
   - Full name input
   - Phone number input
   - Password input
   - Register button
4. Parent pages  
   After you register as a parent, following pages will become available for you to visit:
   1. Profile page  
      Which contains information:
      - Your full name
      - Your phone number
      - Your children
      - Your debt for aikido classes
    2. Schedule page  
       This page contains list of your children, and each item will contain information about:
       - Full name of child
       - Group name
       - Price for one class
       - Full name of trainer
       - Phone number of trainer
       - Shcedule for classes
    3. Attendance page  
       This page contains list of tables for each of your children which will show their attendance of classes for current month
  5. Trainer pages
     1. Children page  
        This page has following functionality:
        - Form for adding child
        - Form for searching list of children
        - List of all children
          Each item of list also has a button for removing child from list
      2. Parents page  
         This page contains a table with list of all parents and their children  
         You can also search table with the help of the form above the table  
         Each row of the table has following features:
         - You can view parents number by hovering above info icon on the right of the parent name
         - You can also open modal window in order to manage parent children
      3. Groups page  
         This page contains:
         - Form for adding group
         - Form for searching groups
         - List of groups
         
         When you add group, or edit group modal window will open  
         This modal enbales you to change following information about group:  
         - Group name
         - Price for one class
         - Changing schedule of the group, including start time and end time of class
         - Save changes button, delete group button
         - List of children in the group which you can edit  
      4. Attendance page  
         This page contains two select inputs which provide you with ability to select group and month to display attendance of children in the group  
         After you select group, table will be rendered  
         Inside the table, there will be rows with children of the group and check inputs, enabling user to mark their attendance and save it  
      5. Debt page  
         This page display list of parents and their debts for classes, with form to sort the list
