// ============================= FOR Jquery ==============================================
//================= For numbers that use commas and decimal points =======================
$('input.chocoNumber').keyup(function(event) 
{
	//Deleting Invalid Characters
	//if(event.which >= 37 && event.which <= 40) return;
	//============== Formating Number ====================================================
	$(this).val(function(index, value)
	{
		if($(this).val().indexOf('.') > -1)
		{
			var arr = $(this).val().split('.');
			var val1 = arr[0].replace(/[^0-9.]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			var val2 = arr[1].replace(/[^0-9.]/g, "");
			value = val1+'.'+val2;
			return value
		}
		else
		{
			return value
			.replace(/[^0-9.]/g, "")
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	});
});

//======================== For counting Hiding/Showing Classes ============================
(function($)
{
	$.fn.chocoHSClass = function()
	{
		// Cantidad de elementos de formulario con Display
		var chocoClass = $(this).filter(function() { return $(this).css('display') !== 'none'; } ).length;
		return chocoClass;
	};
})( jQuery );

//========================Only Numbers are Valid ==========================================
$('.chocoOnlyNumbers').keyup(function(e)
{
	if(this.value!='-')
	{
		while(isNaN(this.value))
		{
			this.value = this.value.split('').reverse().join('').replace(/[\D]/i,'').split('').reverse().join('');
		}
	}
}).on("cut copy paste",function(e)
{
	e.preventDefault();
});

// ============================ For calculator masking ====================================
var chocoAllowedNumbers = '0123456789^+-*/%()Ee ';
var chocoSqrt = 'sqrt';
var chocoPi = 'pi';
var chocoSin = 'sin';
var chocoCos = 'cos';
var chocoTan = 'tan';
var chocoPow = 'pow';

// ============================= TO BE DEVELOPED ==========================================
