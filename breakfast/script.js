const englishBreakfast = ["поджареный бекон",  "колбаски", "яичница", "жареные грибы", "жареные помидоры",  "кофе"];

let newEnglishBreakfast = [];
let dinner = []

const breakfastFunction = breakfast => {
    if(breakfast.length <= 4){
        newEnglishBreakfast = englishBreakfast.splice(0, breakfast.length)
    } else {
        newEnglishBreakfast = englishBreakfast.splice(0, 4)
        dinner = breakfast;
    }
}
breakfastFunction(englishBreakfast);