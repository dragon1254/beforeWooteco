import totalMenuList from "../constant/constant";

class getList{
    getMenuList(menulist){
        let menuArray = []
        menulist.forEach(element => {
            let eachMenu = element.split('-')
            menuArray.push(eachMenu[0]);
        });
        return menuArray;
    }

    getMenuCountList(menulist){
        let countArray = []
        menulist.forEach(element => {
            let eachCount = element.split('-');
            countArray.push(Number(eachCount[1]));
        });
        return countArray;
    }

    getOrderedList(orderedMenuArray,orderedMenuCountArray){
        let orderedList = {}
        totalMenuList.menu.forEach(element => {
            orderedList[element] = 0;
        });
        orderedMenuArray.forEach((element,index) => {
            this.matchMenu(element,orderedList,orderedMenuCountArray,index)
        });
        return orderedList;
    }

    matchMenu(element, orderedList,orderedMenuCountArray,index){
        totalMenuList.menu.forEach((menu) => {
            if(element === menu){
                orderedList[menu] = orderedMenuCountArray[index];
            }
            if(element !== menu){
                if(orderedList[menu] !==0){
                    return
                }
                orderedList[menu] = 0;
            }
        });
        
    }
}

export default getList;