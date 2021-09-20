ej.base.enableRipple(window.ripple)

    // Render the PDF viewer control
	 ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Magnification);
	 
    var viewer = new ej.pdfviewer.PdfViewer ({
	enableToolbar: false,
	enableAnnotationToolbar: false,
	enableMagnificationToolbar: true,
    documentPath: "Annotations.pdf",
    serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer'
    });
  //ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Annotation, ej.pdfviewer.FormFields);
    viewer.documentLoad = function (args) {
        if(args.documentName === 'Annotations.pdf')
        {
			/*
            viewer.annotation.addAnnotation("FreeText", {
                offset: {x: 250, y: 150}, 
                fontSize:16, 
                fontFamily: "Helvetica", 
                pageNumber: 1, 
                width: 200, 
                height: 40, 
                isLock: false, 
                defaultText: "Syncfusion"
            });
            viewer.annotation.addAnnotation("Stamp", {
                offset: {x: 200, y: 240}, 
                pageNumber: 1
            }, "Approved");
            viewer.annotation.addAnnotation("Stamp", {
                offset: {x: 200, y: 350}, 
                pageNumber: 1
            }, null, "SignHere");
			  viewer.annotation.addAnnotation("Stamp", {
                offset: {x: 20, y: 35}, 
                pageNumber: 1
            }, null, "SignHere");
            viewer.annotation.addAnnotation("Stamp", {
                offset: {x: 200, y: 460}, 
                pageNumber: 1
            }, null, null, "Confidential");
            //The customStampImageSource property contains the stamp image as a base64 string
            viewer.annotation.addAnnotation("Stamp", {
                offset: {x: 200, y: 530}, 
                pageNumber: 1,
                customStamps: [
                {
                    customStampName: "Image",
                    customStampImageSource:
                    "data:image/jpeg;base64,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"
                }
                ]
				
            });
			
			 viewer.annotation.addAnnotation("Stamp", {
				allowedInteractions: ['None'],
				author:"Hemant Thote",
				height: 30,
				width:100,
				isLock:false,
				isPrint:false,
                offset: {x: 30, y: 40}, 
                pageNumber: 1,
                customStamps: [
                {
                    customStampName: "Image",
                    customStampImageSource:
					"data:image/jpeg;base64,/9j/4AAQSkZJRgABAAEAkACQAAD//gAfTEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMQD/2wCEAAUFBQgFCAwHBwwMCQkJDA0MDAwMDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0BBQgICgcKDAcHDA0MCgwNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDf/EAaIAAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKCwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foRAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/AABEIACMAdgMBEQACEQEDEQH/2gAMAwEAAhEDEQA/APTK+SP1sKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAK93crZxNMwJC44GMkkgAc4AySOScCqjHmfKjKpNUoub6dF5uy/ErQ3NyHEdxCqBgdrRSNIoI5IfdFEUz/CQGBOQSDjNuMbXhJ6dGrP5au/4GUZ1OZRqwST2cZOSVukrwhbyeqflpeU38MUaPPJFH5mNp8xdrE9kY7d3tgc+lLkbbUU3by1XqtbFe1hGMZVJQjzbe8rN/wB1u1/uHPfW8S73ljRCCQxdQMAgE5JxgEgE+pApKMnok7+jKdWnFc0pxS3u5JK17Xvfvp6k8ciTKHjIdGGVZSCCD0II4IPqKlprR6NdDSLUkpRaaeqad015ND6RQUAFABQAUAFABQAUAFABQBVvc+SwEQuAeGjOPmUnDcMCCcZIU43dMjNXHda8vZ9n0/4cxq/A1yc66x01T330enR77GBZW0cMqDThcRQrv82ORZ0i2sCQUWcAB9+MeVwATuGMV0SbafteVvSzTi383Hpbv8jzaUIxlH6qqkYLm54yVSMLNNrlVRK0ub+Tpe/QSxVrIRPcRyMrWyRgLG7lWBJdGVVJTfleWAU7cMRgU5e9dRaVpN7pXXRrvby17CpJ0VCVSMmnSjFJRlJppu6aSbjzXWrstNWtA0iAn7I/llVjhmA44Ql1wuRlQcZAweRnHFFR251feUfnoww8P4MuWyUKnTSLclZaaXtf8bGxpUbRQlWBT97MQCMcGRiCB6EHI7EVhUd3ddo/kjuw6cYNNW9+ejVtHN2+XY0qyOsKACgAoAKACgAoAKACgAoAKACgClcafDdMHcMGA25SSSMkdcMY2XcM9A2QMn1NaRm46K1vNJ/ddO3yOedGFR80r3ta8ZSi2uz5Wrryd0W441iUIgCqoAAAwAB0AFQ3fV7mySilGKsloktEkOpFBQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAf/9k="
                 }
                ],
				customData:[
				{
					SigneeId: 12,
					MultiDocID: 2323,
					TokenType: "SIGN",
					DocId: 323234
				}
				]

            });
           */
        }
    };
    viewer.appendTo('#pdfViewer');
	
	var SignTokenTop = 10;
	function SignToken(){
		if(SignTokenTop>0){
				SignTokenTop = SignTokenTop + 50;
		}
	
		viewer.annotation.addAnnotation("Stamp", {
				allowedInteractions: ['None'],
				author:"Hemant Thote",
				height: 30,
				width:100,
				isLock:false,
				isPrint:false,
                offset: {x: 30, y: SignTokenTop}, 
                pageNumber: viewer.viewerBase.currentPageNumber,
                customStamps: [
                {
                    customStampName: "Image",
                    customStampImageSource:
					"data:image/jpeg;base64,/9j/4AAQSkZJRgABAAEAkACQAAD//gAfTEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMQD/2wCEAAUFBQgFCAwHBwwMCQkJDA0MDAwMDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0BBQgICgcKDAcHDA0MCgwNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDf/EAaIAAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKCwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foRAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/AABEIACMAdgMBEQACEQEDEQH/2gAMAwEAAhEDEQA/APTK+SP1sKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAK93crZxNMwJC44GMkkgAc4AySOScCqjHmfKjKpNUoub6dF5uy/ErQ3NyHEdxCqBgdrRSNIoI5IfdFEUz/CQGBOQSDjNuMbXhJ6dGrP5au/4GUZ1OZRqwST2cZOSVukrwhbyeqflpeU38MUaPPJFH5mNp8xdrE9kY7d3tgc+lLkbbUU3by1XqtbFe1hGMZVJQjzbe8rN/wB1u1/uHPfW8S73ljRCCQxdQMAgE5JxgEgE+pApKMnok7+jKdWnFc0pxS3u5JK17Xvfvp6k8ciTKHjIdGGVZSCCD0II4IPqKlprR6NdDSLUkpRaaeqad015ND6RQUAFABQAUAFABQAUAFABQBVvc+SwEQuAeGjOPmUnDcMCCcZIU43dMjNXHda8vZ9n0/4cxq/A1yc66x01T330enR77GBZW0cMqDThcRQrv82ORZ0i2sCQUWcAB9+MeVwATuGMV0SbafteVvSzTi383Hpbv8jzaUIxlH6qqkYLm54yVSMLNNrlVRK0ub+Tpe/QSxVrIRPcRyMrWyRgLG7lWBJdGVVJTfleWAU7cMRgU5e9dRaVpN7pXXRrvby17CpJ0VCVSMmnSjFJRlJppu6aSbjzXWrstNWtA0iAn7I/llVjhmA44Ql1wuRlQcZAweRnHFFR251feUfnoww8P4MuWyUKnTSLclZaaXtf8bGxpUbRQlWBT97MQCMcGRiCB6EHI7EVhUd3ddo/kjuw6cYNNW9+ejVtHN2+XY0qyOsKACgAoAKACgAoAKACgAoAKACgClcafDdMHcMGA25SSSMkdcMY2XcM9A2QMn1NaRm46K1vNJ/ddO3yOedGFR80r3ta8ZSi2uz5Wrryd0W441iUIgCqoAAAwAB0AFQ3fV7mySilGKsloktEkOpFBQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAf/9k="
                 }
                ],
				customData:
				{
					SigneeId: 12,
					MultiDocID: 2323,
					TokenType: "SIGN",
					DocId: 323234
				}
				

            });
	}
	
	var InitialTokenTop = 10;
	function InitialToken(){
		if(InitialTokenTop>0){
				InitialTokenTop = InitialTokenTop + 50;
		}
	
		viewer.annotation.addAnnotation("Stamp", {
				allowedInteractions: ['None'],
				author:"Hemant Thote",
				height: 30,
				width:100,
				isLock:false,
				isPrint:false,
                offset: {x: 300, y: InitialTokenTop}, 
                pageNumber: viewer.viewerBase.currentPageNumber,
                customStamps: [
                {
                    customStampName: "Image",
                    customStampImageSource:
					"data:image/jpeg;base64,/9j/4AAQSkZJRgABAAEAkACQAAD//gAfTEVBRCBUZWNobm9sb2dpZXMgSW5jLiBWMS4wMQD/2wCEAAUFBQgFCAwHBwwMCQkJDA0MDAwMDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0BBQgICgcKDAcHDA0MCgwNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDf/EAaIAAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKCwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foRAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/AABEIACMAdQMBEQACEQEDEQH/2gAMAwEAAhEDEQA/APTK+SP1sKACgAoAKACgAoAKACgAoAKAFoEFABQAUAJQMKACgAoAKAMtNSSNXe4IRVnMK4B5PG0cZ+YnjjGTgAZrZwbso6+7zP8AU41XUVJ1WklUcFo9e3fVj11GKVQ0bFcSKhDxyK2WxhSjBHUsD8rEbe/IpcjWjXRvRq3rdXTt2KVaMleLt7yi1KMk7vpyvlav0bVuupDbaqtycDMWJ2iAeOQb9oY4UkIATtJJ+YKBtIyQaqVPl8/dT0a0/Pv+pnCuqnePvuFnGWtk9m1Gz0v1S2erJxqtuZBEC2WbYGMcgjLc8CUp5ZPBHDnJGBzU+zklfTva6vb0vf8AA09vT5lC7u3ZPlkot9lPl5G/R76D7C5a6jLuACJJE4zjCOyjqTzgc+/pSnHldl2T+9XKpTdSLk7aSktO0ZNL8i7WZ0C0CCgAoAKAEoGFABQAUAFAGF9il/u/8vnm9V+5/e6/p19q6OZd/sW+Z53spdv+X3Puvh77/hv5BcWUzzu6r8rTW7A5H3U++euePTqe2aFJKKXlJffsE6U3OUktHOk91tHfr0/4YjS0nEgXYQqXbS78pgo6PyBu3cFgpBUHPIyOafNG2+8Era7prysSqc1JLldo1nO942cZRlqtb6N2aaXldFRrO8lkjaVJnkjmVmdpkWLYGP8AqokcK2Ac5ljWTGfmZgBWnNBJqLik4tJcr5r26trT/t128kYOnVlKLnGblGabbnFQ5U/sQjJJ23vOKlbq3ZG7psD28RSQbSZZWxkHhpGYHgnqCD6+tc02m7rsvwSPRoxcItSVnzTfycm1t5F+szpFoEFABQAUAJQMKACgAoAKACgAoAKACgAoAKAFoEFABQAUAJQMKACgAoAKACgAoAKACgAoAKAFoEFABQAUAf/Z"
                 }
                ],
				customData:
				{
					SigneeId: 12,
					MultiDocID: 2323,
					TokenType: "INITIAL",
					DocId: 323234
				}
				

            });
	}
	
	viewer.annotationSelect = args => {
		  console.log("eSignature Token Selected");
		   console.log(args.annotationCollection[0].author);	
		   console.log("Page Number : " + args.annotationCollection[0].pageNumber);	
		    console.log(args.annotationCollection[0].customData);	
          console.log(args.annotationCollection[0].bounds);	
	};
	
	function GetAllTokens(){
		var id = "pdfViewer";
        var htmlElement = document.getElementById(id);
        if (htmlElement != null) {                                            
            var pdf = document.getElementById(id).ej2_instances[0];
			console.log(pdf.annotationCollection);
		}		
	}
	
