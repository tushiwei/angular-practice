import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  textValue = '';

  palindromeText = '';
  isPalindrome = false;

  // insert white space between chars
  formatText(e: any){
    console.log(e.target);
    console.log(e.target.value);
    const ori = e.target.value;
    const orinospace = ori.replace(' ', '');
    const chars = orinospace.split('');
    this.textValue = chars.join(' ');
  }

  // check if the test isPalindrome
  // another way is user aray.revers() to compare
  checkPalindrome( text: string) {
     if ( text.length === 0 ) {
        this.isPalindrome = true;
     } else {
       const len = text.length;
       const mid =  Math.floor(len / 2);
       for ( let i = 0; i < mid; i++) {
         if ( text[i] === text[len - 1 - i]) {
           continue;
         } else {
           this.isPalindrome = false;
           return;
         }
       }
       this.isPalindrome = true;
     }
  }

  // return random integer between (min, max)
  getRndInteger(min, max) {
     return Math.floor(Math.random() * ( max - min + 1) ) + min;
  }

/**
 *  Given an array of integers, return indices of the two numbers such that they add up *  to a specific target.
 *  You may assume that each input would have exactly one solution, and you may not use *  the same element twice.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 getTwoSum(nums, target) {
    const numMap = new Map();
    for(let i = 0; i <= nums.length; i++) {
        const complement = target - nums[i];
        if ( numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    throw 'error';
  }
}
