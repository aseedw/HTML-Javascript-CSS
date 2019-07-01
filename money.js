var row_item_original_value;
var row_price_original_value;
var sort_type = 0; // when the value is 0, sort sort from largestsmallest to smallest.

function AddItem(){

	// Get item name and its price from textbox
	var item_value=document.getElementById("item").value;
	var price_value=document.getElementById("price").value;
	/*
	alert(item_value + " " + price_value);
	*/
	
	// Get table
	var table = document.getElementById("myTable");
	
	// Create new row and cells
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	
	// Insert values to cells
	cell1.innerHTML = item_value;
	cell2.innerHTML = price_value;
	cell3.innerHTML = (new Date()).toLocaleString();
	
	var btn1 = document.createElement("BUTTON");   // Create a <button> element
	var btn2 = document.createElement("BUTTON");   // Create a <button> element
	
	// Add delete button
	btn1.innerHTML = "DELETE";                     // Insert text
	cell4.onclick = function()
	{
		var table_row_index = this.parentElement.rowIndex;
		table.deleteRow(table_row_index);
		CalculateSum();
	}
	cell4.appendChild(btn1);               		  // Append <button> to cell
	
	// Add modify button
	btn2.innerHTML = "MODIFY";
	cell5.onclick = function()
	{
		var table_row_index = this.parentElement.rowIndex;
		var row_item = table.rows[table_row_index].cells[0];
		var row_price = table.rows[table_row_index].cells[1];
		var row_modify = table.rows[table_row_index].cells[4];
		var row_modify_button = row_modify.children[0];
		
		if(row_modify_button.innerHTML == 'MODIFY')
		{
			row_modify_button.innerHTML = 'CONFIRM';
			var input_box1 = document.createElement("INPUT");   // Create a <button> element
			var input_box2 = document.createElement("INPUT");   // Create a <button> element
			row_item_original_value = row_item.innerHTML;
			row_price_original_value = row_price.innerHTML;
			row_item.innerHTML = '';
			row_price.innerHTML = '';
			input_box1.value = row_item_original_value;
			input_box2.value = row_price_original_value;
			row_item.appendChild(input_box1);
			row_price.appendChild(input_box2);
		}
		else
		{
			// Check item value and price value are not blank
			if(row_item.children[0].value == '' || row_price.children[0].value == '')
			{
				alert("Item or Price is blank, change nothing.");
				row_item.innerHTML = row_item_original_value;
				row_price.innerHTML = row_price_original_value;
			}
			else
			{
				row_item.innerHTML = row_item.children[0].value;
				row_price.innerHTML = row_price.children[0].value;
			}
			row_modify_button.innerHTML = 'MODIFY';
			CalculateSum();
		}
		
	}
	cell5.appendChild(btn2);
	
	// Calculate sum
	CalculateSum();
}

function CalculateSum()
{
	var sum	= 0;
	var table = document.getElementById("myTable");
	var total = document.querySelector('#total');
	
	for(var j=1; j < table.rows.length; j++){
		sum += parseInt(table.rows[j].cells[1].innerHTML,10);
	}
	total.innerHTML = sum.toString();
}

function Sort()
{
	var table = document.getElementById("myTable");
	
	if(sort_type == 0)
	{
		for(var j=1; j < table.rows.length; j++)
		{
			for(var k=1; k < table.rows.length - j; k++)
			{
				if(parseInt(table.rows[k].cells[1].innerHTML,10) < parseInt(table.rows[k + 1].cells[1].innerHTML,10))
				{
					var cell1_temp = table.rows[k + 1].cells[0].innerHTML;
					var cell2_temp = table.rows[k + 1].cells[1].innerHTML;
					var cell3_temp = table.rows[k + 1].cells[2].innerHTML;
					
					table.rows[k + 1].cells[0].innerHTML = table.rows[k].cells[0].innerHTML;
					table.rows[k + 1].cells[1].innerHTML = table.rows[k].cells[1].innerHTML;
					table.rows[k + 1].cells[2].innerHTML = table.rows[k].cells[2].innerHTML;
					
					table.rows[k].cells[0].innerHTML = cell1_temp;
					table.rows[k].cells[1].innerHTML = cell2_temp;
					table.rows[k].cells[2].innerHTML = cell3_temp;
				}
			}
		}
		sort_type = 1;
	}
	else
	{
		for(var j=1; j < table.rows.length; j++)
		{
			for(var k=1; k < table.rows.length - j; k++)
			{
				if(parseInt(table.rows[k].cells[1].innerHTML,10) > parseInt(table.rows[k + 1].cells[1].innerHTML,10))
				{
					var cell1_temp = table.rows[k + 1].cells[0].innerHTML;
					var cell2_temp = table.rows[k + 1].cells[1].innerHTML;
					var cell3_temp = table.rows[k + 1].cells[2].innerHTML;
					
					table.rows[k + 1].cells[0].innerHTML = table.rows[k].cells[0].innerHTML;
					table.rows[k + 1].cells[1].innerHTML = table.rows[k].cells[1].innerHTML;
					table.rows[k + 1].cells[2].innerHTML = table.rows[k].cells[2].innerHTML;
					
					table.rows[k].cells[0].innerHTML = cell1_temp;
					table.rows[k].cells[1].innerHTML = cell2_temp;
					table.rows[k].cells[2].innerHTML = cell3_temp;
				}
			}
		}
		sort_type = 0;
	}
}

function test()
{
	document.getElementById("test").innerHTML = 'test';
}
