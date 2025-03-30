class BankAccount {
   constructor(initialBalance = 0) {
      this.balance = initialBalance;
      this.transactionHistory = [];
      this.interestInterval = null;
   }

   deposit(amount) {
      try {
         if (amount <= 0) throw new Error('The replenishment amount must be greater than zero.');
         this.balance += amount;
         this.addTransaction('Deposit', amount);
      } catch (error) {
         console.error(error.message);
      }
   }

   withdraw(amount) {
      try {
         if (amount <= 0) throw new Error('The withdrawal amount must be greater than zero.');
         if (amount > this.balance) throw new Error('Insufficient funds in the account');
         this.balance -= amount;
         this.addTransaction('Withdrawal', amount);
      } catch (error) {
         console.error(error.message);
      }
   }

   getBalance() {
      return this.balance;
   }

   addTransaction(type, amount) {
      const date = new Date();
      this.transactionHistory.push({ type, amount, date: date.toISOString() });
   }

   startInterest(interval, rate) {
      this.interestInterval = setInterval(() => {
         const interest = (this.balance * rate) / 100;
         this.balance += interest;
         this.addTransaction('Interest', interest);
         console.log(`Interest has been accrued: ${interest}. New balance: ${this.balance}`);
      }, interval);
   }

   stopInterest() {
      if (this.interestInterval) {
         clearInterval(this.interestInterval);
         this.interestInterval = null;
         console.log('Interest accrual has been stopped.');
      }
   }

   scheduleTransaction(type, amount, delay) {
      setTimeout(() => {
         if (type === 'deposit') {
            this.deposit(amount);
         } else if (type === 'withdraw') {
            this.withdraw(amount);
         }
      }, delay);
   }

   getTransactionHistory() {
      return this.transactionHistory;
   }

   getBalanceOnDate(date) {
      const targetDate = new Date(date).toISOString();
      let balanceOnDate = this.balance;

      for (let i = 0; i < this.transactionHistory.length; i++) {
         const transaction = this.transactionHistory[i];
         if (transaction.date <= targetDate) {
            if (transaction.type === 'Deposit') {
               balanceOnDate += transaction.amount;
            } else if (transaction.type === 'Withdrawal') {
               balanceOnDate -= transaction.amount;
            } else if (transaction.type === 'Interest') {
               balanceOnDate += transaction.amount;
            }
         }
      }
      return balanceOnDate;
   }
}

const account1 = new BankAccount(1000);

account1.deposit(500);
account1.withdraw(200);
account1.startInterest(5000, 2);
account1.scheduleTransaction('deposit', 100, 3000);
account1.scheduleTransaction('withdraw', 50, 6000);


setTimeout(() => {
   console.log('Transaction history:', account1.getTransactionHistory());
}, 7000);


setTimeout(() => {
   console.log('Balance as of 2025-03-30:', account1.getBalanceOnDate('2025-03-30'));
}, 7000);


setTimeout(() => {
   account1.stopInterest();
}, 20000);