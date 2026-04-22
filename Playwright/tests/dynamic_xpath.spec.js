// tagname [@att name='att value']

// Relation between tags

//1.parent

// to freeze the element --> soursce in DOM and ctrl+\ to freeze the webpage

//Syntax:: //tagname[@id='value']/parent::tagname[@att='value']/following-sibling::tagname[text()='']

//2.child
//preceding sibling
//following sibling
//ancestor --> going upword in dom page
//descendant --> going downword in dom page

//example xpath
// (//span[text()="Trending now"]/ancestor::li[@class="last"]/descendant::div[@class="layoutMiddle"]//a)[8]

////th[text()="CustomerName"]/ancestor::table[@class="ws-table-all notranslate"]/descendant::td[text()="Berlin"]

//(//th[text()="CustomerName"]/ancestor::table[@class="ws-table-all notranslate"]//td)[5]