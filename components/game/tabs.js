import {
  InfoEmpty,
  CloudSync,
  WifiOff,
  Journal,
  TowerNoAccess,
  UserScan,
  AddFolder,
  MoneySquare,
} from "iconoir-react"
import getCountries from "../getCountries"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { DateTime } from "luxon"
import useSWR from "swr"
import Tooltip from "react-simple-tooltip"
import ErrorMessage from "../ErrorMessage"

export function RegionalPricingTab({ id }) {
  const countries = getCountries()

  function RenderTable() {
    return countries.map((country, index) => {
      const url = `https://raw.githubusercontent.com/srdrabx/prices-tracker-egs/main/database/prices/${country}/${id}.json`
      return RenderCountry(url, index, country)
    })
  }
  return (
    <>
      <div className="info-banner w-full md:w-max rounded-md py-1 px-1 flex items-center">
        <InfoEmpty height={27} width={27} className="px-1" /> There are
        currently {countries.length} regions available in the Epic Games Store.
      </div>
      <table className="w-full my-3">
        <thead>
          <tr>
            <th className="tg-0lax">Region</th>
            <th className="tg-0lax">Region Price</th>
            <th className="tg-0lax">
              <Tooltip content="EGS Base price" placement="right">
                <button className="border-dotted border-bottom">
                  Price in US$
                </button>
              </Tooltip>
            </th>
          </tr>
        </thead>
        <tbody>{RenderTable()}</tbody>
      </table>
    </>
  )
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function RenderCountry(url, index, country) {
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" })
  const { data, error } = useSWR(url, fetcher)
  if (error)
    return (
      <tr key={index}>
        <td className="tg-0lax">{regionNames.of(country)}</td>
        <td className="tg-0lax">-</td>
        <td className="tg-0lax">-</td>
      </tr>
    )
  if (!data)
    return (
      <tr key={index}>
        <td className="tg-0lax">-</td>
        <td className="tg-0lax">-</td>
        <td className="tg-0lax">-</td>
      </tr>
    )
  return (
    <tr key={index}>
      <td className="tg-0lax">
        {regionNames.of(country)} (in{" "}
        {data.price.totalPaymentPrice.paymentCurrencyCode})
      </td>
      <td className="tg-0lax">
        {data.price.totalPaymentPrice.paymentCurrencySymbol}{" "}
        {data.price.totalPaymentPrice.paymentCurrencyAmount / 100}
      </td>
      <td className="tg-0lax">
        $ {data.price.totalPrice.basePayoutPrice / 100}
      </td>
    </tr>
  )
}

export function ExpansionsTab(data) {
  const pages = data.data

  const router = useRouter()
  const { id } = router.query
  return (
    <div className="">
      {pages.map((expansion, index) => (
        <div
          className="w-full md:w-3/4 mx-auto rounded-sm flex flex-col md:flex-row info-banner my-3 items-center justify-items-center"
          key={index}
        >
          <div className="flex-1 w-full md:w-auto">
            <Image
              src={expansion.image || "/img/egs-placeholder.png"}
              alt={expansion.title}
              width={25}
              height={14}
              layout="responsive"
              quality={100}
              loading="eager"
              placeholder="blur"
              blurDataURL="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
              className="rounded-sm"
              unoptimized={true}
            />
          </div>
          <div className="flex-1 py-2 md:py-0 text-center">
            {getType(expansion.type) || expansion.type}
          </div>
          <div className="flex-1 py-2 md:py-0 underline hover:no-underline text-sm">
            {expansion.type === "productHome" ? (
              <Link href={`https://epicgames.com/store/p/${id}`} className="">
                <a target="_blank">{expansion.title}</a>
              </Link>
            ) : (
              <Link
                href={`https://epicgames.com/store/p/${id}--${expansion.slug}`}
                className=""
              >
                <a target="_blank">{expansion.title}</a>
              </Link>
            )}
          </div>
          <div className="flex-1 py-2 md:py-0 text-xs md:text-sm text-right px-5">
            {DateTime.fromISO(expansion.releaseDate)
              .setLocale("en")
              .toLocaleString({
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
          </div>
        </div>
      ))}
    </div>
  )
}

function getType(type) {
  const types = {
    productHome: "Base Game",
    addon: "Addons",
    info: "Information",
    offer: "Expansion",
  }
  return types[type]
}

export function DetailsTab({ offerId }) {
  const { data, error } = useSWR(
    `https://raw.githubusercontent.com/srdrabx/items-tracker/master/database/items/${offerId}.json`,
    fetcher
  )
  if (error) {
    return <ErrorMessage />
  }
  if (!data) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="flex-col px-0 md:px-40 w-full max-w-full overscroll-x-none">
      <div className="flex flex-col md:flex-row justify-between w-full items-center py-4 md:py-2 border-2 border-gray-600 border-b-0">
        <p className="flex-1 inline-flex items-center px-2 font-bold">
          Game Folder <AddFolder height={20} width={20} className="mx-2" />
        </p>
        <p className="flex-1">
          {data.customAttributes.FolderName !== undefined &&
          data.customAttributes.FolderName.value !== undefined
            ? data.customAttributes.FolderName.value
            : "Unknown"}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full items-center py-4 md:py-2 border-2 border-gray-600 border-b-0">
        <p className="flex-1 inline-flex items-center px-2 font-bold">
          Cloud Saves <CloudSync height={20} width={20} className="mx-2" />
        </p>
        <p className="flex-1 w-full overflow-x-auto whitespace-nowrap">
          {data.customAttributes.CloudSaveFolder !== undefined &&
          data.customAttributes.CloudSaveFolder.value !== undefined
            ? data.customAttributes.CloudSaveFolder.value
            : "No"}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full py-4 md:py-2 border-2 border-gray-600 border-b-0">
        <p className="flex-1 inline-flex items-center px-2 font-bold">
          <span className="whitespace-nowrap">Offline support</span>{" "}
          <WifiOff height={20} width={20} className="mx-2" />
        </p>
        <p className="flex-1">
          {data.customAttributes.CanRunOffline.value !== false ? "Yes" : "No"}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full py-4 md:py-2 border-2 border-gray-600 border-b-0">
        <p className="flex-1 inline-flex items-center px-2 font-bold whitespace-nowrap">
          Rich Presence (launcher){" "}
          <Journal height={20} width={20} className="mx-2" />
        </p>
        <p className="flex-1 w-full overflow-x-auto text-center md:text-left whitespace-nowrap">
          {data.customAttributes.MonitorPresence !== undefined &&
          data.customAttributes.MonitorPresence.value !== false
            ? `ID: ${
                data.customAttributes.PresenceID !== undefined
                  ? data.customAttributes.PresenceID.value
                  : data.customAttributes.PresenceId.value
              }`
            : "No"}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full py-4 md:py-2 border-2 border-gray-600 border-b-0">
        <p className="flex-1 inline-flex items-center px-2 font-bold">
          <span className="whitespace-nowrap">Access Control</span>{" "}
          <TowerNoAccess height={20} width={20} className="mx-2" />
        </p>
        <p className="flex-1">
          {data.customAttributes.UseAccessControl !== undefined
            ? data.customAttributes.UseAccessControl.value
              ? "No"
              : "Yes"
            : "No"}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full py-4 md:py-2 border-2 border-gray-600 border-b-0">
        <p className="flex-1 inline-flex items-center px-2 font-bold">
          <span className="whitespace-nowrap">Korean ID Verification</span>{" "}
          <UserScan height={20} width={20} className="mx-2" />
        </p>
        <p className="flex-1">
          {data.customAttributes.CanSkipKoreanIdVerification !== undefined
            ? data.customAttributes.CanSkipKoreanIdVerification.value !== true
              ? "No"
              : "Yes"
            : "No"}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full py-4 md:py-2 border-2 border-gray-600">
        <p className="flex-1 inline-flex items-center px-2 font-bold">
          <span className="whitespace-nowrap">Self Refund</span>{" "}
          <MoneySquare height={20} width={20} className="mx-2" />
        </p>
        <p className="flex-1">
          {data.selfRefundable !== undefined && data.selfRefundable === true
            ? "Yes"
            : "No"}
        </p>
      </div>
    </div>
  )
}
