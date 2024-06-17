import validateName from '../validateName';

test('validateName func test', () => {
    expect(validateName("Валера")).toEqual(false);
    expect(validateName("Vale12321ra")).toEqual(false);
    expect(validateName("-Valera")).toEqual(false);
    expect(validateName("Valera_13")).toEqual(false);

    // const testObj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    // const testSortKeysArr = ["name", "level"];
    // const expected = [
    //     {key: "name", value: "мечник"},
    //     {key: "level", value: 2},
    //     {key: "attack", value: 80},
    //     {key: "defence", value: 40}, 
    //     {key: "health", value: 10} 
    // ];
    // expect(orderByProps(testObj, testSortKeysArr)).toEqual(expected);
});