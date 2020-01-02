import cv2
import numpy as np
from matplotlib import pyplot as plt
 
img = cv2.imread('pic17.jpg',0)
 

  

gray = cv2.GaussianBlur(img, (5, 5), 0)

# create a CLAHE object (Arguments are optional).
clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
cl1 = clahe.apply(img)
    
cv2.imwrite('clahe_21.jpg',cl1)