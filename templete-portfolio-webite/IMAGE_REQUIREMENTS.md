# Image Requirements for Services Page

To complete the Services page, you'll need to add the following images to the project:

1. **3ds Max Image**
   - Path: `/public/image/3dsmax.jpg`
   - Recommended size: 600x400px
   - Content: Example of 3D modeling or rendering created with 3ds Max

2. **AutoCAD Image**
   - Path: `/public/image/autocad.jpg`
   - Recommended size: 600x400px
   - Content: Example of floor plans or technical drawings created with AutoCAD

3. **Vray Image**
   - Path: `/public/image/vray.jpg`
   - Recommended size: 600x400px
   - Content: Example of photorealistic rendering created with Vray

4. **Photoshop Image**
   - Path: `/public/image/photoshop.jpg`
   - Recommended size: 600x400px
   - Content: Example of image editing or enhancement done with Photoshop

5. **Corona Image**
   - Path: `/public/image/corona.jpg`
   - Recommended size: 600x400px
   - Content: Example of rendering created with Corona renderer

Until these images are added, the Services page will display broken image links. You can use any relevant interior design images that showcase the capabilities of each software.

## Temporary Solution

As a temporary solution, you can use existing project images by modifying the services array in `app/services/page.jsx` to use images that are already in the project:

```javascript
// Example modification
const services = [
    {
        id: 1,
        name: "3ds Max",
        description: "Professional 3D modeling, animation, and rendering software for creating stunning interior visualizations.",
        image: "/image/project3.jpg", // Use existing image
        features: [
            // features remain the same
        ]
    },
    // Modify other services similarly
];
```

This will allow the page to display properly until you can add the specific software-related images.
