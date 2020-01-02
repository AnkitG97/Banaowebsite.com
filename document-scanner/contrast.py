from skimage.filters import threshold_local
import numpy as np
import argparse
import cv2
import imutils


image = cv2.imread('pic17_clahe.jpg')

ret1,image = cv2.threshold(image,127,255,cv2.THRESH_BINARY)

cv2.imshow('sharpened', image)
cv2.waitKey()
