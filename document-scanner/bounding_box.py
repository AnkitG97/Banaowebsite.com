import cv2
import numpy as np


img1 = cv2.imread('pic2.jpg') 




lab= cv2.cvtColor(img1, cv2.COLOR_BGR2LAB)
cv2.imshow("lab",lab)

#-----Splitting the LAB image to different channels-------------------------
l, a, b = cv2.split(lab)
cv2.imshow('l_channel', l)
cv2.imshow('a_channel', a)
cv2.imshow('b_channel', b)
clahe = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8,8))
cl = clahe.apply(l)
cv2.imshow('CLAHE output', cl)
limg = cv2.merge((cl,a,b))
final = cv2.cvtColor(limg, cv2.COLOR_LAB2BGR)






img = cv2.cvtColor(final, cv2.COLOR_BGR2GRAY)
th2 = cv2.adaptiveThreshold(img,255,cv2.ADAPTIVE_THRESH_MEAN_C,cv2.THRESH_BINARY,11,2)
kernel = np.ones((5,5),np.uint8)
closing = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel)






image, contours, hier = cv2.findContours(img, cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_NONE)
for c in contours:
    # get the bounding rect
    x, y, w, h = cv2.boundingRect(c)
    # draw a white rectangle to visualize the bounding rect
    cv2.rectangle(closing, (x, y), (x + w, y + h), 255, 1)

cv2.drawContours(img1, contours, -1, (255, 255, 0), 1)

#imS = cv2.resize(im, (960, 540)) 

cv2.namedWindow('improved_image', cv2.WINDOW_NORMAL)
cv2.namedWindow('adaptiveThreshold', cv2.WINDOW_NORMAL)
cv2.namedWindow('noise_output', cv2.WINDOW_NORMAL)
cv2.namedWindow('final_output', cv2.WINDOW_NORMAL)


cv2.imshow("improved_image",final)
cv2.imshow("adaptiveThreshold",th2)
cv2.imshow("noise_output",closing)
cv2.imshow("final_output",img1)

cv2.waitKey(0)
cv2.destroyAllWindows()