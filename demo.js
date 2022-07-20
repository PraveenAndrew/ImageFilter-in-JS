function demo()
{
     const can =  document.getElementById('canvas');
     if(can.getContext)
     {
        const c = can.getContext('2d');
        const uploadButton =  document.getElementById('upload');
        const removeBtn = document.getElementById('removeBtn');

        uploadButton.addEventListener('change',(event)=>
        {
            // only get extension name ex: photo.jpg
             const file = document.getElementById('upload').files[0];
             // read the file name or images name
             const  reader = new FileReader();
             if(file)
             {
                fileName = file.name;
                reader.readAsDataURL(file);
             }
             // display image 
                reader.addEventListener('load',() =>
                {
                 img = new Image();   // images objects  in js
                 img.src = reader.result;
                 img.onload = function()
                {
                    can.width = img.width;
                    can.height = img.height;
                    c.drawImage(img,0,0,can.width,can.height);
                }
             })
        })

      
      // Brightness Filter starts here
      addEventListener('click',(event) => 
      {
         if(event.target.classList.contains('filter-btn'))
         {
            if(event.target.classList.contains('increase_bright'))
            {
                  Caman('#canvas',img, function () 
                           {
                            this.brightness(3);
                            // this.contrast(30);
                            // this.sepia(60);
                            // this.saturation(-30);
                             this.render();
                          });
            }
            else if(event.target.classList.contains('decrease_bright'))
             {
                  Caman('#canvas',img,function()
                  {
                     this.brightness(-3);
                     this.render();
                  })
             }
             else if(event.target.classList.contains('increase_contrast'))
              {
                   Caman('#canvas',img,function()
                   {
                     this.contrast(3);
                     this.render();
                   });
              }
              else if(event.target.classList.contains('decrease_contrast'))
              {
                   Caman('#canvas',img,function()
                   {
                     this.contrast(-3);
                     this.render();
                   });
              }
              else if(event.target.classList.contains('increase_saturation'))
              {
                   Caman('#canvas',img,function()
                   {
                     this.saturation(3);
                     this.render();
                   });
              }
              else if(event.target.classList.contains('decrease_saturation'))
              {
                   Caman('#canvas',img,function()
                   {
                     this.saturation(-3);
                     this.render();
                   });
              }
              else if(event.target.classList.contains('vintage'))
              {
                 Caman('#canvas',img,function()
                 {
                    this.vintage();
                    this.render();
                 })
              }
              else if(event.target.classList.contains('lomo'))
              {
                 Caman('#canvas',img,function()
                 {
                    this.lomo();
                    this.render();
                 })
              }
              else if(event.target.classList.contains('clarity'))
              {
                 Caman('#canvas',img,function()
                 {
                    this.clarity();
                    this.render();
                 })
              }
         }
      });

      // Brightness filter ends here
 

      removeBtn.addEventListener('click',event =>
      {
           Caman('#canvas',img,function()
                 {
                    this.revert();
                 });
      });

     }
}