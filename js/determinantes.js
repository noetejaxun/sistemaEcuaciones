function calculo () {
	function determinante (a11, a12, a13, a21, a22, a23, a31, a32, a33){
		ladoIzquierdo = (a31 * a22 * a13) + (a11 * a32 * a23) + (a21 * a12 * a33);
		ladoDerecho  =  (a11 * a22 * a33) + (a21 * a32 * a13) + (a31 * a12 * a23);
		var resultado = ladoDerecho - ladoIzquierdo;
		return resultado;
	}

	var matrizA =  [parseFloat(document.getElementById('a11').value), parseFloat(document.getElementById('a12').value), parseFloat(document.getElementById('a13').value), parseFloat(document.getElementById('a14').value),
			  		parseFloat(document.getElementById('a21').value), parseFloat(document.getElementById('a22').value), parseFloat(document.getElementById('a23').value), parseFloat(document.getElementById('a24').value),
			  		parseFloat(document.getElementById('a31').value), parseFloat(document.getElementById('a32').value), parseFloat(document.getElementById('a33').value), parseFloat(document.getElementById('a34').value)];

	var determinanteGeneral = ( determinante(matrizA[0], matrizA[1], matrizA[2], matrizA[4], matrizA[5], matrizA[6],matrizA[8], matrizA[9], matrizA[10])),
	    determinanteEjeX   =  ( determinante(matrizA[3], matrizA[1], matrizA[2], matrizA[7], matrizA[5], matrizA[6],matrizA[11], matrizA[9], matrizA[10])),
	    determinanteEjeY   =  ( determinante(matrizA[0], matrizA[3], matrizA[2], matrizA[4], matrizA[7], matrizA[6],matrizA[8], matrizA[11], matrizA[10])),
	    determinanteEjeZ   =  ( determinante(matrizA[0], matrizA[1], matrizA[3], matrizA[4], matrizA[5], matrizA[7],matrizA[8], matrizA[9], matrizA[11]));

	var valorX = determinanteEjeX / determinanteGeneral,
	    valorY = determinanteEjeY / determinanteGeneral,
	    valorZ = determinanteEjeZ / determinanteGeneral;

	if (isNaN(valorX) || isNaN(valorY) || isNaN(valorZ)){
		alert('Los valores no dan un resultado numerico');
	} else {
		document.getElementById('valorX').value = valorX;
		document.getElementById('valorY').value = valorY;
		document.getElementById('valorZ').value = valorZ;
	}
}
