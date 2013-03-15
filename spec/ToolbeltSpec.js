describe("Toolbelt", function() {
  describe("array custom tests", function() {  
    it("should return [1,2,3]", function() {
      expect(Toolbelt.array.first([1,2,3,4,5,6], 3)).toEqual([1,2,3]);
    });
    it("should return [shafi,haadiyah,omar]", function() {
      expect(Toolbelt.array.first(["shafi","haadiyah","omar","moaz","haroon","haneef"], 3)).toEqual(["shafi","haadiyah","omar"]);
    });
    it("should return [shafi]", function() {
      expect(Toolbelt.array.first(["shafi","haadiyah","omar","moaz","haroon","haneef"],0)).toEqual([]);
    });
    it("should return [shafi,haadiyah,omar]", function() {
      expect(Toolbelt.array.first(["shafi","haadiyah","omar","moaz","haroon","haneef"], null)).toEqual("shafi");
    });
    it("should return [shafi]", function() {
      expect(Toolbelt.array.first(["shafi","haadiyah","omar","moaz","haroon","haneef"], -3)).toEqual(["shafi","haadiyah","omar"]);
    });
    it("should return [shafi,haadiyah,omar,moaz,haroon,haneef]", function() {
      expect(Toolbelt.array.first(["shafi","haadiyah","omar","moaz","haroon","haneef"], 31)).toEqual(["shafi","haadiyah","omar","moaz","haroon","haneef"]);
    });
    it("should return 1", function() {
      expect(Toolbelt.array.first([1,2,3,4,5,6])).toEqual(1);
    });
    it("should return [shafi,haadiyah,omar,moaz,haroon,haneef]", function() {
      expect(Toolbelt.array.first(["shafi","haadiyah","omar","moaz","haroon","haneef"], 5)).toEqual(["shafi","haadiyah","omar","moaz","haroon"]);
    });
  });

  describe("toolbelt array function first vs underscore array", function() {  
    it("should return '1'", function() {
      expect(Toolbelt.array.first([1,2,3,4,5,6], -2)).toEqual(_.first([1,2,3,4,5,6], -2));
    });
     it("should return [shafi,haadiyah,omar]", function() {
      expect(Toolbelt.array.first(["shafi","haadiyah","omar","moaz","haroon","haneef"], 3)).toEqual(_.first(["shafi","haadiyah","omar","moaz","haroon","haneef"], 3));
    });
    it("should return [shafi,haadiyah,omar]", function() {
      expect(Toolbelt.array.first(["shafi","haadiyah","omar","moaz","haroon","haneef"], -3)).toEqual(_.first(["shafi","haadiyah","omar","moaz","haroon","haneef"], -3));
    });
      it("Toolbelt first array function should equal underscore _.first array function", function() {
      expect(Toolbelt.array.first(["shafi","haadiyah","omar","moaz","haroon","haneef"], null)).toEqual(_.first(["shafi","haadiyah","omar","moaz","haroon","haneef"], null));
    });
      it("Toolbelt first array function should equal underscore _.first array function", function() {
      expect(Toolbelt.array.first(["shafi","haadiyah","omar","moaz","haroon","haneef"], 14)).toEqual(_.first(["shafi","haadiyah","omar","moaz","haroon","haneef"], 14));
    });
    it("Toolbelt first array function should equal underscore _.first array function", function() {
      expect(Toolbelt.array.first(["shafi","haadiyah","omar","moaz","haroon","haneef"], 0)).toEqual(_.first(["shafi","haadiyah","omar","moaz","haroon","haneef"], 0));
    });
    it("should return '1'", function() {
      expect(Toolbelt.array.first([1,2,3,4,5,6], -14)).toEqual(_.first([1,2,3,4,5,6], -14));
    });
  });

  describe("toolbelt array function initial standard tests", function() {  
    it("should return [1,2,3]", function() {
      expect(Toolbelt.array.initial([1,2,3,4,5,6], 3)).toEqual(_.initial([1,2,3,4,5,6], 3));
    });
     it("should return string", function() {
      expect(Toolbelt.array.initial(["shafi","haadiyah","omar"], 2)).toEqual(_.initial(["shafi","haadiyah","omar"], 2));
    });
      it("should return [shafi,haadiyah,omar,moaz,haroon]", function() {
      expect(Toolbelt.array.initial(["shafi","haadiyah","omar","moaz","haroon","haneef"], null)).toEqual(_.initial(["shafi","haadiyah","omar","moaz","haroon","haneef"], null));
    });
      it("should return the array", function() {
      expect(Toolbelt.array.initial([1,3,5,7,9], 14)).toEqual([]);
    });
      it("should return undefined", function() {
      expect(Toolbelt.array.initial([1,3,5,7,9])).toEqual([1,3,5,7]);
    });
      it("should return the array", function() {
      expect(Toolbelt.array.initial([1,3,5,7,9], null)).toEqual([1,3,5,7]);
    });
      it("should return [1,3,5,7,9]", function() {
      expect(Toolbelt.array.initial([1,3,5,7,9], -1)).toEqual([1,3,5,7,9]);
    });
  });

  describe("toolbelt array function initial vs underscore array function initial", function() {  
    it("should return [1,2,3]", function() {
      expect(Toolbelt.array.initial([1,2,3,4,5,6], 3)).toEqual(_.initial([1,2,3,4,5,6], 3));
    });
     it("should return string", function() {
      expect(Toolbelt.array.initial(["shafi","haadiyah","omar"], 2)).toEqual(_.initial(["shafi","haadiyah","omar"], 2));
    });
      it("should return [shafi,haadiyah,omar,moaz,haroon]", function() {
      expect(Toolbelt.array.initial(["shafi","haadiyah","omar","moaz","haroon","haneef"], null)).toEqual(_.initial(["shafi","haadiyah","omar","moaz","haroon","haneef"], null));
    });
      it("should return the array", function() {
      expect(Toolbelt.array.initial([1,3,5,7,9], 14)).toEqual(_.initial([1,3,5,7,9], 14));
    });
      it("should return undefined", function() {
      expect(Toolbelt.array.initial([1,3,5,7,9])).toEqual(_.initial([1,3,5,7,9]));
    });
      it("should return the array", function() {
      expect(Toolbelt.array.initial([1,3,5,7,9],null)).toEqual(_.initial([1,3,5,7,9],null));
    });
      it("should return undefined", function() {
      expect(Toolbelt.array.initial([1,3,5,7,9],0)).toEqual(_.initial([1,3,5,7,9],0));
    });
      it("should return undefined", function() {
      expect(Toolbelt.array.initial([1,3,5,7,9],-14)).toEqual(_.initial([1,3,5,7,9],-14));
    });
  });

  describe("toolbelt array function last standard tests", function() {  
    it("should return [4,5,6]", function() {
      expect(Toolbelt.array.last([1,2,3,4,5,6], 3)).toEqual([4,5,6]);
    });
     it("should return string", function() {
      expect(Toolbelt.array.last(["shafi","haadiyah","omar"], 2)).toEqual(["haadiyah","omar"]);
    });
      it("should return 'haneef'", function() {
      expect(Toolbelt.array.last(["shafi","haadiyah","omar","moaz","haroon","haneef"], null)).toEqual("haneef");
    });
      it("should return [haadiyah,omar, moaz,haroon,haneef]", function() {
      expect(Toolbelt.array.last(["shafi","haadiyah","omar","moaz","haroon","haneef"], 5)).toEqual(["haadiyah","omar","moaz","haroon","haneef"]);
    });
     it("should return string", function() {
      expect(Toolbelt.array.last(["shafi","haadiyah","omar"], 1)).toEqual(["omar"]);
    });
      it("should return 'haneef'", function() {
      expect(Toolbelt.array.last(["shafi","haadiyah","omar","moaz","haroon","haneef"])).toEqual("haneef");
    });
      it("should return [1,3,5,7,9]", function() {
      expect(Toolbelt.array.last([1,3,5,7,9], 14)).toEqual([1,3,5,7,9]);
    });
  });

  describe("toolbelt array function last vs underscore array function last", function() {  
    it("should return [4,5,6]", function() {
      expect(Toolbelt.array.last([1,2,3,4,5,6], -4)).toEqual(_.last([1,2,3,4,5,6], -4));
    });
     it("should return string", function() {
      expect(Toolbelt.array.last(["shafi","haadiyah","omar"], 2)).toEqual(_.last(["shafi","haadiyah","omar"], 2));
    });
      it("should return [shafi,haadiyah,omar,moaz,haroon]", function() {
      expect(Toolbelt.array.last(["shafi","haadiyah","omar","moaz","haroon","haneef"], -14)).toEqual(_.last(["shafi","haadiyah","omar","moaz","haroon","haneef"], -14));
    });
    it("should return [4,5,6]", function() {
      expect(Toolbelt.array.last([1,2,3,4,5,6], 3)).toEqual(_.last([1,2,3,4,5,6], 3));
    });
     it("should return string", function() {
      expect(Toolbelt.array.last(["shafi","haadiyah","omar"], 0)).toEqual(_.last(["shafi","haadiyah","omar"], 0));
    });
      it("should return [shafi,haadiyah,omar,moaz,haroon]", function() {
      expect(Toolbelt.array.last(["shafi","haadiyah","omar","moaz","haroon","haneef"], null)).toEqual(_.last(["shafi","haadiyah","omar","moaz","haroon","haneef"], null));
    });
      it("should return [1,3,5,7,9]", function() {
      expect(Toolbelt.array.last([1,3,5,7,9], 14)).toEqual(_.last([1,3,5,7,9], 14));
    });
  });
  describe("toolbelt array function rest standard tests", function() {  
    it("should return [4,5,6]", function() {
      expect(Toolbelt.array.rest([1,2,3,4,5,6], 3)).toEqual([4,5,6]);
    });
     it("should return strings", function() {
      expect(Toolbelt.array.rest(["shafi","haadiyah","omar"], 2)).toEqual(["omar"]);
    });
     it("should return array of strings", function() {
      expect(Toolbelt.array.rest(["shafi","haadiyah","omar"], 1)).toEqual(["haadiyah","omar"]);
    });
      it("should return [haadiyah,omar,moaz,haroon,haneef]", function() {
      expect(Toolbelt.array.rest(["shafi","haadiyah","omar","moaz","haroon","haneef"], null)).toEqual(["haadiyah","omar","moaz","haroon","haneef"]);
    });
      it("should return [haneef]", function() {
      expect(Toolbelt.array.rest(["shafi","haadiyah","omar","moaz","haroon","haneef"], 5)).toEqual(["haneef"]);
    });
     it("should return string", function() {
      expect(Toolbelt.array.rest(["shafi","haadiyah","omar"], 1)).toEqual(["haadiyah","omar"]);
    });
      it("should return [haadiyah,omar,moaz,haroon,haneef]", function() {
      expect(Toolbelt.array.rest(["shafi","haadiyah","omar","moaz","haroon","haneef"])).toEqual(["haadiyah","omar","moaz","haroon","haneef"]);
    });
      it("should return [1,3,5,7,9]", function() {
      expect(Toolbelt.array.rest([1,3,5,7,9], 14)).toEqual([]);
    });
  });

  describe("toolbelt array function rest vs underscore array function _.rest", function() {  
    it("should return [3,4,5,6]", function() {
      expect(Toolbelt.array.rest([1,2,3,4,5,6], -4)).toEqual(_.rest([1,2,3,4,5,6], -4));
    });
     it("should return string", function() {
      expect(Toolbelt.array.rest(["shafi","haadiyah","omar"], 2)).toEqual(_.rest(["shafi","haadiyah","omar"], 2));
    });
      it("should return [haadiyah,omar,moaz,haroon]", function() {
      expect(Toolbelt.array.rest(["shafi","haadiyah","omar","moaz","haroon","haneef"], 0)).toEqual(_.rest(["shafi","haadiyah","omar","moaz","haroon","haneef"], 0));
    });
    it("should return [4,5,6]", function() {
      expect(Toolbelt.array.rest([1,2,3,4,5,6], 3)).toEqual(_.rest([1,2,3,4,5,6], 3));
    });
     it("should return string", function() {
      expect(Toolbelt.array.rest(["shafi","haadiyah","omar"], 2)).toEqual(_.rest(["shafi","haadiyah","omar"], 2));
    });
      it("should return [haadiyah,omar,moaz,haroon]", function() {
      expect(Toolbelt.array.rest(["shafi","haadiyah","omar","moaz","haroon","haneef"], null)).toEqual(_.rest(["shafi","haadiyah","omar","moaz","haroon","haneef"], null));
    });
      it("should return []", function() {
      expect(Toolbelt.array.rest([1,3,"5b",7,9], 14)).toEqual(_.rest([1,3,"5b",7,9], 14));
    });
  });
  describe("toolbelt array function compact standard tests", function() {  
      it("should return [1,2,3,4,5,6]", function() {
      expect(Toolbelt.array.compact([1,false, undefined, NaN, 0, null, 2, 3, 4, 5, 6])).toEqual([1,2,3,4,5,6]);
    });
      it("should return [1, 5b, -3, -Infinity, Infinity, 4, 5, 6]", function() {
      expect(Toolbelt.array.compact([1,false, undefined, NaN, -0, null,"5b", -3, -Infinity, Infinity, 4, 5, 6])).toEqual([1,"5b", -3, -Infinity, Infinity, 4, 5, 6]);
    });
});
    describe("toolbelt array function compact standard tests", function() {  
      it("should return [1,2,3,4,5,6]", function() {
      expect(Toolbelt.array.compact([1,false, undefined, NaN, 0, null, 2, 3, 4, 5, 6])).toEqual(_.compact([1,false, undefined, NaN, 0, null, 2, 3, 4, 5, 6]));
    });
      it("should return [1, 5b, -3, -Infinity, Infinity, 4, 5, 6]", function() {
      expect(Toolbelt.array.compact([1,false, undefined, NaN, -0, null,"5b", -3, -Infinity, Infinity, 4, 5, 6])).toEqual(_.compact([1,false, undefined, NaN, -0, null,"5b", -3, -Infinity, Infinity, 4, 5, 6]));
    });
});
      describe("toolbelt array function compact standard tests", function() {  
      it("should return [1,2,3,4,5,6]", function() {
      expect(Toolbelt.array.flatten([1,2,[3,4,[5]],[3]])).toEqual([1,2,3,4,5,3]);
    });
      it("should return [1,4b,2,3,4,54t]", function() {
      expect(Toolbelt.array.flatten([1,["4b",[[2,3],4],"54t"]])).toEqual([1,"4b",2,3,4,"54t"]);
    });
});
    describe("toolbelt array function compact standard tests", function() {  
      it("should return [1,2,3,4,5,6]", function() {
      expect(Toolbelt.array.flatten([1,2,[3,4,[5]],[3]])).toEqual(_.flatten([1,2,[3,4,[5]],[3]]));
    });
      it("should return [1,4b,2,3,4,54t]", function() {
      expect(Toolbelt.array.flatten([1,["4b",[[2,3],4],"54t"]])).toEqual(_.flatten([1,["4b",[[2,3],4],"54t"]]));
    });
});
    describe("toolbelt array function compact standard tests", function() {  
      it("should return [1,3,4,5,5]", function() {
      expect(Toolbelt.array.without([1,2,2,2,3,4,5,5],2)).toEqual([1,3,4,5,5]);
    });
      it("should return [2b, -3, 4, 5, 6]", function() {
      expect(Toolbelt.array.without(["1b","2b","5b", -3, 4, 5, 6], "5b","1b")).toEqual(["2b", -3, 4, 5, 6]);
    });
});
    describe("toolbelt array function without should return an Array without the arguments specified", function() {  
      it("should return [1,2,5]", function() {
      expect(Toolbelt.array.without([1,2,3,3,3,4,4,5],3,4)).toEqual(_.without([1,2,3,3,3,4,4,5],3,4));
    });
      it("should return the same as underscores without", function() {
      expect(Toolbelt.array.without([1,23,1001,"frank",45,-1],23,-1)).toEqual(_.without([1,23,1001,"frank",45,-1],23,-1));
    });
});
    describe("toolbelt array function union should return union of the arrays", function() {  
      it("should return [1,3,5,-1,-3,4,34,56]", function() {
      expect(Toolbelt.array.union([1,3,5],[-1,-3,3,1],[3,4,5,34,56])).toEqual([1,3,5,-1,-3,4,34,56]);
    });
      it("should return union", function() {
      expect(Toolbelt.array.union([1,-3,5,6,"1b","2b","5b"], [-3, 4, 5, 6])).toEqual([1,-3,5,6,"1b","2b","5b",4]);
    });
});
    describe("toolbelt array function union should return the same as underscore's union", function() {  
      it("should return [1,3,4,5]", function() {
      expect(Toolbelt.array.union([1,2,3,3,3,4,4,5],[3,4])).toEqual(_.union([1,2,3,3,3,4,4,5],[3,4]));
    });
      it("should return the same as underscores union", function() {
      expect(Toolbelt.array.union([1,23,1001,"frank",45,-1],[23,-1])).toEqual(_.union([1,23,1001,"frank",45,-1],[23,-1]));
    });
});
    describe("Toolbelt array function intersection should return intersection of arrays", function() {  
      it("should return [3]", function() {
      expect(Toolbelt.array.intersection([1,3,5],[-1,-3,3,1],[3,4,5,34,56])).toEqual([3]);
    });
      it("should return intersection", function() {
      expect(Toolbelt.array.intersection([1,-3,5,6,"1b","2b","5b"], [-3, 4, 5, 6])).toEqual([-3,5,6]);
    });
});
    describe("Toolbelt array function intersection should return the same as underscore's intersection function", function() {  
      it("should return [1,2,5]", function() {
      expect(Toolbelt.array.intersection([1,3,5],[-1,-3,3,1],[3,4,5,34,56])).toEqual(_.intersection([1,3,5],[-1,-3,3,1],[3,4,5,34,56]));
    });
      it("should return the same as underscores intersection", function() {
      expect(Toolbelt.array.intersection([1,23,1001,"frank",45,-1],[23,-1])).toEqual(_.intersection([1,23,1001,"frank",45,-1],[23,-1]));
    });
      it("should return the same as underscores intersection", function() {
      expect(Toolbelt.array.intersection([1,2,3,[4],5],[2,3,5,4])).toEqual(_.intersection([1,2,3,[4],5],[2,3,5,4]));
    });
});
    describe("toolbelt array function differnce shpuld return values that are unique to the array", function() {
      it("should return []", function() {
      expect(Toolbelt.array.difference([1,3,5],[-1,-3,3,1],[3,4,5,34,56])).toEqual([]);
    });
      it("should return difference", function() {
      expect(Toolbelt.array.difference([1,-3,5,6,"1b","2b","5b"], [-3, 4, 5, 6])).toEqual([1,"1b","2b","5b"]); 
    });
});
    describe("Toolbelt array function difference should return the same as underscore's difference function", function() {  
      it("should return [1,2,5]", function() {
      expect(Toolbelt.array.difference([1,3,5],[-1,-3,3,1],[3,4,5,34,56])).toEqual(_.difference([1,3,5],[-1,-3,3,1],[3,4,5,34,56]));
    });
      it("should return the same as underscores difference", function() {
      expect(Toolbelt.array.difference([1,23,1001,"frank",45,-1],[23,-1])).toEqual(_.difference([1,23,1001,"frank",45,-1],[23,-1]));
    });
      it("should return the same as underscores difference", function() {
      expect(Toolbelt.array.difference([1,2,3,[4],5],[2,3,5,4])).toEqual(_.difference([1,2,3,[4],5],[2,3,5,4]));
    });
      it("should return []", function() {
      expect(Toolbelt.array.difference([1,3,5],[-1,-3,3],[3,4,5,34,56])).toEqual(_.difference([1,3,5],[-1,-3,3],[3,4,5,34,56]));
    });
});
    describe("toolbelt array function unique should return array without duplicates", function() {
      it("should return [1,2,3,4]", function() {
      expect(Toolbelt.array.unique([1,2,1,3,1,4])).toEqual([1,2,3,4]);
    });
      it("should get rid of duplicates", function() {
      expect(Toolbelt.array.unique([1,-3,5,1,5,6,6,"1b","2b","5b"])).toEqual([1,-3,5,6,"1b","2b","5b"]); 
    });
});
    describe("Toolbelt array function unique should return the same as underscore's uniq function", function() {  
      it("should return [1,2,5]", function() {
      expect(Toolbelt.array.unique([1,3,5,1,-3,3,1,3,4,5,34,56])).toEqual(_.uniq([1,3,5,1,-3,3,1,3,4,5,34,56]));
    });
      it("should return the same as underscores difference", function() {
      expect(Toolbelt.array.unique([1,23,1001,"frank",45,23,1001])).toEqual(_.uniq([1,23,1001,"frank",45,23,1001]));
    });
      it("should return the same as underscores difference", function() {
      expect(Toolbelt.array.unique([1,2,3,[4],2,3,5,4])).toEqual(_.uniq([1,2,3,[4],2,3,5,4]));
    });
      it("should return []", function() {
      expect(Toolbelt.array.unique([1,3,5,3,4,5,34,56])).toEqual(_.uniq([1,3,5,3,4,5,34,56]));
    });
});
    describe("toolbelt array function zip", function() {
      it("should return [1,2,3,4]", function() {
      expect(Toolbelt.array.zip([1,2,3],[1,2,3],[1,2,3])).toEqual([[1,1,1],[2,2,2],[3,3,3]]);
    });
      it("should get rid of duplicates", function() {
      expect(Toolbelt.array.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false])).toEqual([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]); 
    });
});
    describe("Toolbelt array function unique should return the same as underscore's uniq function", function() {  
      it("should return [1,2,5]", function() {
      expect(Toolbelt.array.zip([1,3,5,1,-3,3,1,3,4,5,34,56])).toEqual(_.zip([1,3,5,1,-3,3,1,3,4,5,34,56]));
    });
      it("should return the same as underscores difference", function() {
      expect(Toolbelt.array.zip([1,2,54],[2,4,56],[[2],3,7])).toEqual(_.zip([1,2,54],[2,4,56],[[2],3,7]));
    });
});
    describe("Toolbelt object function should return the same as the underscore object function", function() {  
      it("should return object", function() {
      expect(Toolbelt.array.object(['moe', 'larry', 'curly'], [30, 40, 50])).toEqual(_.object(['moe', 'larry', 'curly'], [30, 40, 50]));
    });  
      it("should return object", function() {
      expect(Toolbelt.array.object(['moe', 'larry', 'curly'], [30, 40, 50])).toEqual({'moe':30, 'larry':40, 'curly':50});
    });
});
    describe("function should return object", function() {  
      it("should return object", function() {
      expect(Toolbelt.array.object(['moe', 'larry', 'curly'], [30, 40, 50])).toEqual(_.object([['moe', 30], ['larry', 40], ['curly', 50]]));
    });  
      it("should return object without values parameter", function() {
        expect(Toolbelt.array.object([['moe', 30], ['larry', 40], ['curly', 50]])).toEqual({'moe':30, 'larry':40, 'curly':50});
    });
});
    describe("Toolbelt object function should return the same as the underscore object function", function() {  
      it("should return object", function() {
      expect(Toolbelt.array.indexOf([1,2,3,4,5,6],4)).toEqual(_.indexOf([1,2,3,4,5,6],4));
    });  
      it("should return object indexOf", function() {
      expect(Toolbelt.array.indexOf(['moe', 'larry', 'curly'], 'larry')).toEqual(_.indexOf(['moe', 'larry', 'curly'], 'larry'));
    });
});
    describe("function should return object", function() {  
      it("should return index", function() {
      expect(Toolbelt.array.indexOf([1,2,3,4],3)).toEqual(2);
    });  
      it("should return correct index", function() {
      expect(Toolbelt.array.indexOf([5,24,34,23,4,56,78],4)).toEqual(4);
    });
});
    describe("Toolbelt object function should return the same as the underscore object function", function() {  
      it("should return object", function() {
      expect(Toolbelt.array.lastIndexOf([2,3,5,6,7,7,6,5,8,979,5,6,1,3],6)).toEqual(_.lastIndexOf([2,3,5,6,7,7,6,5,8,979,5,6,1,3],6));
    });  
      it("should return object", function() {
      expect(Toolbelt.array.lastIndexOf([4,6,7,3,5,2,2,2,-2,NaN], 2)).toEqual(_.lastIndexOf([4,6,7,3,5,2,2,2,-2,NaN], 2));
    });
});
    describe("function should return object", function() {  
      it("should return object", function() {
      expect(Toolbelt.array.lastIndexOf([1,2,4,7,8,94,43,2],2)).toEqual(7);
    });  
      it("should return object", function() {
      expect(Toolbelt.array.lastIndexOf([1,6,5,6,4,7,84,3,6],6)).toEqual(8);
    });
});
    describe("Toolbelt  ", function() {  
      it("should return ", function() {
      expect(Toolbelt.array.sortedIndex([10, 20, 30, 40, 50], 35)).toEqual(_.sortedIndex([10, 20, 30, 40, 50], 35));
    });  
      it("should return ", function() {
      expect(Toolbelt.array.sortedIndex([3,4,6,9,14],12)).toEqual(_.sortedIndex([3,4,6,9,14],12));
    });
});
    describe("function should return array", function() {  
      it("should return ", function() {
      expect(Toolbelt.array.sortedIndex([10, 20, 30, 40, 50], 35)).toEqual(3);
    });  
      it("should return ", function() {
      expect(Toolbelt.array.sortedIndex([3,4,6,9,14],12)).toEqual(4);
    });
});
    describe("Toolbelt ", function() {  
      it("should return ", function() {
      expect(Toolbelt.array.range(10)).toEqual(_.range(10));
    });  
      it("should return ", function() {
      expect(Toolbelt.array.range(1,11)).toEqual(_.range(1,11));
    });
      it("should return ", function() {
      expect(Toolbelt.array.range(0,30,5)).toEqual(_.range(0,30,5));
    });
      it("should return ", function() {
      expect(Toolbelt.array.range(1,11)).toEqual(_.range(1,11));
    });
});
    describe("function should return array", function() {  
      it("should return ", function() {
      expect(Toolbelt.array.range(0, -10, -1)).toEqual([0, -1, -2, -3, -4, -5, -6, -7, -8, -9]);
    });  
      it("should return ", function() {
      expect(Toolbelt.array.range(0)).toEqual([]);
    });
});

/*
    describe("Toolbelt ", function() {  
      it("should return ", function() {
      expect(Toolbelt..([])).toEqual(_.());
    });  
      it("should return ", function() {
      expect(Toolbelt..([])).toEqual(_.());
    });
});
    describe("function should return object", function() {  
      it("should return ", function() {
      expect(Toolbelt..([])).toEqual();
    });  
      it("should return ", function() {
      expect(Toolbelt..([])).toEqual();
    });
});
    */
    describe("Toolbelt function ", function() {  
      it("should return the same as underscore's 'functions' ", function() {
      expect(Toolbelt.object.functions(_)).toEqual(_.functions(_));
    });  
      /*it("should return ", function() {
      expect(Toolbelt..([])).toEqual(_.());
    });
});
    describe("function should return object", function() {  
      it("should return ", function() {
      expect(Toolbelt..([])).toEqual();
    });  
      it("should return ", function() {
      expect(Toolbelt..([])).toEqual();
    });*/
});
});
