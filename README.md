### chipsincells

### Algorithm for sorting combinations of chips in cells.

#### Theoretical justification
 1. The most effective way to calculate possible combinations of K elements in M cells is
bitwise operations of "division" and "multiplication" by 2
1.1 Task: to determine the possible offsets available for 18 chips in 36 cells
1.2. ALL CHIPS IN THE CELLS ARE THE SAME, THAT IS, THE POSITIONS OBTAINED
      FOR ONE CHIP, THEY AUTOMATICALLY ASSUME THE PASSAGE OF A SIMILAR OPERATION FOR EACH OF THE 18 CHIPS. IN ORDER TO AVOID DUPLICATION AND SIMPLIFY TIME CALCULATIONS, THIS CALCULATION IS OMITTED.\
 1.3. The number of real passes for each chip is equal to:

``36×35×34×33×32×31×30×29×28×27×26×25×24×23×22×21×20×19 ~= 5,810240762× 102⁵``
       
 2. To solve the problem, we will divide the operations into methods of finding the beginning of the "offset" - "division by 2", adding lower zeros:
2.1. From the lower unit to the older one: _byteShiftRight($a)
2.2. Adding the unit to the younger, due to the right shift: _addOneByteAfterLastOne
2.3. Generating a combination. Offset of K chips by M cells from junior to senior: _findFirstOffsetByte($K, $M)
 2.4. Calculate the following offset combination: _findNextOffset($a)
2.5. We will repeat the process to the zero bit of the offset
 
 ``If K = 2, see self::mergeToAssoc()``

3. Each offset operation will be recorded in a file of 100 lines each
3.1. In the process of calculations, we will not allow memory consumption above the default threshold values,
    by redirecting requests to another php socket
PS. For a more optimal algorithm - sequential memory consumption, the calculation takes place by increment
 The number of options is displayed in the browser interface
 
### Launch ./index.html
