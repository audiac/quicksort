def createRandomArray(num)
	newArray = []
	i = 0
	while i < num
		newArray[i] = (1 + rand(10))
		i += 1
	end
	newArray
end

def quickSort(origArray)
	if origArray.count <= 1
		return origArray
	else
		left = []
		right = []
		newArray = []
		pivot = origArray.pop
		length = origArray.count

		origArray.each do |element|
			if element <= pivot
				left << element
			else
				right << element
			end
		end

		newArray << quickSort(left) << pivot << quickSort(right)

		return newArray.flatten!
	end
end

myArray = createRandomArray(5)
puts "Unsorted array: #{myArray}"
sortedArray = quickSort(myArray)
puts "Sorted array: #{sortedArray}"