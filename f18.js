// Objects can also contain function

const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      this.gear = newGear;
    }
  };
  
  bicycle.setGear(43);
  console.log(bicycle.gear);