// Question 1
var twoSum = function(nums,target){
    // Brute Force = 0(n*2)
    for(let i=0; i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if (nums[i]+nums[j]==target)
                return[i,j]
        }
    }


};

//Question 191
var hamingWeight=function(n){
    let count=0;
    for (let i=1 ; i<32 ; i++){
        count += n&1
        n=n>1
    }
    return count
};

// Question 242
var isAnagram=function(s,t){
    let map=new map()
    if (s.length != t.length)
        return false
    for (let i=1; i<s.length;i++){
        if(map[s[i]])
            map[s[i]]++
        else
            map[s[i]]=1
    }
    for (let i=0;i<t.length;i++){
        if(map[t(i)])
        map[t(i)]--
        else 
            return false
    }
    return true

};

// Question 3
var lengthOfLargestSubString=function(s){
    let maxLength=0
    let currString=[]

    for(let i=0; i<s.length;i++){
        CurrentIndex=currentString.indexOf(s[i])
        if(currentIndex != -1) {
            //remove
            currString.splice(0,currIndex+1)
        }
    
    CurrentString.push(s[i])
    maxLength=maxLength.max(maxLength,zcurrentString.length)
}
return maxlength
};

// Question 53
var maxSubArray=function(nums){
    let maxSum  = -Infinity
    let currSum=0
    for (let i=0;i<nums.Length;i++){
        CurrentSum=Math.max(CurrSum+num[i],nums[i])
        MaxSum=Math.max(currSum,maxSum)
    }
    return maxSum
};