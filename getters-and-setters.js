/* get and set methods for accessing an objects variables are explained here. 
The restaurant has a menu object and it has two properties meal and price,
which we don't want the users to modify directly.
We have given them two set methods to change the meal and price value.
There is one get method to check Today's special!
*/
const menu = {
    _meal : '',
    _price : 0,
    set mealToCheck(mealName) {
      if (typeof mealName === 'string') {
      this._meal = mealName;
    } else {
      console.log ('Error: Please input a string value for the meal name');
    }
    },
    set priceToCheck(mealPrice) {
      if (typeof mealPrice === 'number') {
      this._price = mealPrice;
      } else {
        console.log ('Error: Please input a number value for the meal price');
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return "Today's Special is Spaghetti for $5";
      } else {
        return 'Meal name or price is not set correctly.  Please check with the manager!'
      }
    }
  }
  menu.mealToCheck = 'Big Value Meal';
  menu.priceToCheck = 8.99;
  console.log (menu._meal, ' : $', menu._price);
  console.log (menu.todaysSpecial);