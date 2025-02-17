const nums1 = [1, 2, 3, 4];
const nums2 = [5, 6, 7, 8];
const name = "whoami";
const joinedarr = [...nums1, ...nums2, ...name];
console.log(nums1.concat(nums2));
console.log(joinedarr);


const user = {
    name: "Abdul Rafay",
    age: 17
}

const updatedUser = {...user};
console.log(updatedUser);
