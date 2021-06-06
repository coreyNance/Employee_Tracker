const mysql = require('mysql');
const inquirer = require('inquirer');



const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
    password: 'chargersrt8!',
    database: 'employeeTracker_DB',
  });
  

  const start = () => {
    // inquirer
    //   .prompt({
    //     name: 'postOrBid',
    //     type: 'list',
    //     message: 'Would you like to [POST] an auction or [BID] on an auction?',
    //     choices: ['POST', 'BID', 'EXIT'],
    //   })
    //   .then((answer) => {
    //     // based on their answer, either call the bid or the post functions
    //     if (answer.postOrBid === 'POST') {
    //       postAuction();
    //     } else if (answer.postOrBid === 'BID') {
    //       bidAuction();
    //     } else {
          connection.end();
        // }
      // });

      console.log(`Listing on port 3306`);
  };


const addEmployee = () => {
    // prompt for info about the item being put up for auction
    inquirer
      .prompt([
        {
          name: 'item',
          type: 'input',
          message: 'What is the item you would like to submit?',
        },
        {
          name: 'category',
          type: 'input',
          message: 'What category would you like to place your auction in?',
        },
        {
          name: 'startingBid',
          type: 'input',
          message: 'What would you like your starting bid to be?',
          validate(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          },
        },
      ])
      .then((answer) => {
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          'INSERT INTO auctions SET ?',
          // QUESTION: What does the || 0 do?
          {
            item_name: answer.item,
            category: answer.category,
            starting_bid: answer.startingBid || 0,
            highest_bid: answer.startingBid || 0,
          },
          (err) => {
            if (err) throw err;
            console.log('Your auction was created successfully!');
            // re-prompt the user for if they want to bid or post
            start();
          }
        );
      });
  };