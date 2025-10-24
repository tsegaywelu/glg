{
  /* <div className="bg-[#FFFFFF99] overflow-hidden py-[1.75rem] w-full relative">
        <div className="flex animate-scroll space-x-[3.25rem] whitespace-nowrap w-max">
          {[...Imagelogs, ...Imagelogs].map((image, index) =>
            image.TwoImages ? (
              <Link
                key={index}
                href={image.link.trim()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-x-0 flex-shrink-0"
              >
                {image.src1 && (
                  <Image
                    src={image.src1}
                    alt={`${image.alt} - 1`}
                    width={image.width}
                    height={image.height}
                    className={image.className}
                  />
                )}
                {image.src2 && (
                  <Image
                    src={image.src2}
                    alt={`${image.alt} - 2`}
                    width={image.width}
                    height={image.height}
                    className={image.className}
                  />
                )}
              </Link>
            ) : image.src ? (
              <Link
                key={index}
                href={image.link.trim()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <ImageCard
                  src={image.src}
                  alt={image.alt}
                  link={image.link}
                  width={image.width}
                  height={image.height}
                  className={image.className}
                />
              </Link>
            ) : null
          )}
        </div>
      </div> */
}
