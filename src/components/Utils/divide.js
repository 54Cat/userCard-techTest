export const toDivide = (data) => {
        const int = String(data);
        
        if (int.length <= 3) return int;
        let space = 0;
        let newNumber = '';

        for(let i = int.length - 1; i >= 0; i--) {
            if(space == 3) {
                newNumber = ',' + newNumber;
                space = 0;
            }
            newNumber = int.charAt(i) + newNumber;
            space++;
        }

        return newNumber;
    }
