/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   24-12-2016
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 10-07-2017
*/

export const log = (req:any,res:any,next:any) => {
  	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("Query route path-> ", req.route.path);
    console.log("Query route params-> ", req.params);
    console.log("Query route methode-> ", req.route.methods);
  	next();
}
