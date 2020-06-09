//Objective is to find the index of a target in a rotated sorted array.

let nums = [4,5,6,7,0,1,2]
let target = 0


//O(logN) solution that does a one-pass binary search. It is log(N) since we
//are reducing the size of the search by 1/2 every pass.

let low = 0
let high = nums.length - 1
let mid 

//For this binary search, we first find whether the first half or second half
//of the array is sorted correctly. Once that is figured out, we do a generic
//binary search inside the correctly sorted side.
while (low <= high) {
    mid = Math.floor((low + high) / 2)

    if (nums[mid] === target) {
        return mid
    } else if (nums[low] <= nums[mid]) {
        if (target >= nums[low] && target < nums[mid]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    } else {
        if (target <= nums[high] && target > nums[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
}

return -1
